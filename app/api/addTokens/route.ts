import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import { Session, getSession } from '@auth0/nextjs-auth0';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: NextRequest) {
    const { user }: { user: any } = (await getSession()) || { user: undefined };

    const client = await clientPromise;
    try {
        client.db("BlogStandard").collection("users").updateOne(
            { auth0Id: user.sub }, { $inc: { availableTokens: 10 }, $setOnInsert: { auth0Id: user.sub } }, { upsert: true }
        );
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: "Not Content" }, { status: 422 });
    }
    return NextResponse.json({ success: "update" }, { status: 200 });
}
