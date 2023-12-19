import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import clientPromise from '../../../lib/mongodb';


export const POST = withApiAuthRequired(async function (request: NextRequest) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    });

    const body = await request.json();
    const { topic, keywords } = body;
    const token = request.nextUrl.searchParams.get("token");
    if (!topic || !keywords) {
        return NextResponse.json({ error: "Not Content" }, { status: 422 });
    }
    if (topic.length > 80 || keywords.length > 80) {
        return NextResponse.json({ error: "Exceed the length of the content" }, { status: 422 });
    }


    const client = await clientPromise;
    const { user }: { user: any } = (await getSession()) || { user: undefined };
    const db = client.db('BlogStandard');
    const userProfile = await db.collection('users').findOne({
        auth0Id: user.sub,
    });

    /*const response = await openai.createCompletion({
       model: 'text-davinci-003',
       temperature: 0,
       max_tokens: 3600,
       prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}.
       The content should be formatted in SEO-friendly HTML.
       The response must also include appropriate HTML title and meta description content.
       The return format must be stringified JSON in the following format:
       {
         "postContent": post content here
         "title": title goes here
         "metaDescription": meta description goes here
       }`,
     });*/

    if (userProfile?.availableTokens < 5) {
        return NextResponse.json({ error: "Not enough tokens" }, { status: 422 });
    }

    const postContentResult = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a blog post generator.',
            },
            {
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
          The response should be formatted in SEO-friendly HTML, 
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
        ],
        temperature: 0,
    });

    const postContent = postContentResult.choices[0]?.message?.content;


    const titleResult = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a blog post generator.',
            },
            {
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
          The response should be formatted in SEO-friendly HTML, 
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
            {
                role: 'assistant',
                content: postContent,
            },
            {
                role: 'user',
                content: 'Generate appropriate title text for the above blog post. no need HTML format.',
            },
        ],
        temperature: 0,
    });

    const metaDescriptionResult = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a blog post generator.',
            },
            {
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}. 
          The response should be formatted in SEO-friendly HTML, 
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
            {
                role: 'assistant',
                content: postContent,
            },
            {
                role: 'user',
                content:
                    'Generate SEO-friendly description content for the above blog post. no need HTML format.',
            },
        ],
        temperature: 0,
    });

    client.db("BlogStandard").collection("users").updateOne(
        { auth0Id: user.sub }, { $inc: { availableTokens: -5 }, $setOnInsert: { auth0Id: user.sub } }, { upsert: true })

    const title = titleResult.choices[0]?.message?.content;
    const metaDescription =
        metaDescriptionResult.choices[0]?.message?.content;

    const post = await db.collection('posts').insertOne({
        postContent: postContent || '',
        title: title || '',
        metaDescription: metaDescription || '',
        topic,
        keywords,
        userId: userProfile?._id,
        created: new Date(),
    });

    return NextResponse.json({ postId: post.insertedId }, { status: 200 });
});
