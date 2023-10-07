import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from "next/server";
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

type QueryType = {
    userId?: ObjectId;
    created?: { [key: string]: any };
    [key: string]: any;
};

const POSTS_PAGE_SIZE = parseInt(process.env.NEXT_PUBLIC_POSTS_PAGE_SIZE || "5");

export const POST = withApiAuthRequired(async function (request: NextRequest) {
    try {
        const { user }: { user: any } = (await getSession()) || { user: undefined };
        const { selectedPostId, lastPostId, searchTerm } = await request.json();
        console.log('selectedPostId', selectedPostId);
        console.log('lastPostId', lastPostId);
        console.log('searchTerm', searchTerm);

        const client = await clientPromise;
        const db = client.db('BlogStandard');
        const userProfile = await db.collection('users').findOne({ auth0Id: user.sub });

        let query: QueryType = { userId: userProfile?._id };
        let posts: any[] = [];

        if (selectedPostId || lastPostId) {
            const lastPost = await db.collection('posts').findOne({
                _id: new ObjectId(selectedPostId ?? lastPostId),
                userId: userProfile?._id,
            });

            query.created = { [selectedPostId ? '$gte' : '$lt']: lastPost?.created };
        } else {
            posts = await db.collection("posts").find({
                userId: userProfile?._id
            }).limit(parseInt(process.env.NEXT_PUBLIC_POSTS_PAGE_SIZE || "5")).sort({ created: -1 }).toArray();
        }

        if (searchTerm) {
            query['$text'] = { $search: searchTerm };
        }

        if (Object.keys(query).length > 1) {
            posts = await db.collection('posts')
                .find(query)
                .limit(selectedPostId ? 0 : POSTS_PAGE_SIZE)
                .sort({ created: -1 })
                .toArray();
        }

        // Retrieve more from DB if needed
        if (posts.length < POSTS_PAGE_SIZE && selectedPostId) {
            const lastCreatedDate = posts[posts.length - 1].created;
            const remindPostsAmount = POSTS_PAGE_SIZE - posts.length;
            const remindPosts = await db.collection('posts')
                .find({ userId: userProfile?._id, created: { ['$lt']: lastCreatedDate } })
                .limit(remindPostsAmount)
                .sort({ created: -1 })
                .toArray();
            posts.push(...remindPosts);
        }

        // Check if more posts are available
        let hasMore = false;
        if (posts.length > 0) {
            const lastCreatedDate = posts[posts.length - 1].created;
            const hasMoreQuery: QueryType = { userId: userProfile?._id, created: { ['$lt']: lastCreatedDate } };

            if (searchTerm) {
                hasMoreQuery['$text'] = { $search: searchTerm };
            }

            const hasMorePost = await db.collection('posts')
                .find(hasMoreQuery)
                .limit(1)
                .sort({ created: -1 })
                .toArray();

            hasMore = hasMorePost.length > 0;
        }

        return NextResponse.json({ posts, hasMore }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e }, { status: 500 });
    }
});
