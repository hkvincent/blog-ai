import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from "next/server";
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export const POST = withApiAuthRequired(async function (request: NextRequest) {
    try {
        const { user }: { user: any } = (await getSession()) || { user: undefined };
        const body = await request.json();

        const client = await clientPromise;
        const db = client.db('BlogStandard');
        const userProfile = await db.collection('users').findOne({
            auth0Id: user.sub,
        });

        const { lastPostId, getNewerPosts } = body;
        const lastPost = await db.collection('posts').findOne({
            _id: new ObjectId(lastPostId),
            userId: userProfile?._id,
        });
        const posts = await db
            .collection('posts')
            .find({
                userId: userProfile?._id,
                created: { [getNewerPosts ? '$gte' : '$lt']: lastPost?.created },
            })
            .limit(getNewerPosts ? 0 : parseInt(process.env.NEXT_PUBLIC_POSTS_PAGE_SIZE || "5"))
            .sort({ created: -1 })
            .toArray();
        let hasMore = false
        if (Array.isArray(posts) && posts.length > 0) {
            const lastCreatedDate = posts[posts.length - 1].created;
            const hasMorePost = await db
                .collection('posts')
                .find({
                    userId: userProfile?._id,
                    created: { ['$lt']: lastCreatedDate },
                })
                .limit(1)
                .sort({ created: -1 })
                .toArray();
            hasMore = Array.isArray(hasMorePost) && hasMorePost.length > 0;
        }
        console.log('hasMore', hasMore);
        return NextResponse.json({ posts, hasMore }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
});