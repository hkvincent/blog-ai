import clientPromise from '@/lib/mongodb';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export const POST = withApiAuthRequired(async function (request: NextRequest) {
    try {
        const { user }: { user: any } = (await getSession()) || { user: undefined };
        const client = await clientPromise;
        const db = client.db('BlogStandard');
        const userProfile = await db.collection('users').findOne({
            auth0Id: user.sub,
        });

        const body = await request.json();
        const { postId } = body;

        await db.collection('posts').deleteOne({
            userId: userProfile?._id,
            _id: new ObjectId(postId),
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
        console.log('ERROR TRYING TO DELETE A POST: ', e);
        return NextResponse.json({ error: "Not enough tokens" }, { status: 422 });
    }

});