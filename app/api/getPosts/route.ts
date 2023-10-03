import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from "next/server";
import clientPromise from '../../../lib/mongodb';

export const POST = withApiAuthRequired(async function (request: NextRequest) {
    try {
        const { user }: { user: any } = (await getSession()) || { user: undefined };
        const body = await request.json();

        const client = await clientPromise;
        const db = client.db('BlogStandard');
        const userProfile = await db.collection('users').findOne({
            auth0Id: user.sub,
        });

        const { lastPostDate, getNewerPosts } = body;

        const posts = await db
            .collection('posts')
            .find({
                userId: userProfile?._id,
                created: { [getNewerPosts ? '$gt' : '$lt']: new Date(lastPostDate) },
            })
            .limit(getNewerPosts ? 0 : 2)
            .sort({ created: -1 })
            .toArray();

        return NextResponse.json({ posts }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
});