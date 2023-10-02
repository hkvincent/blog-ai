import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai';
import { Session, getSession } from '@auth0/nextjs-auth0';
import clientPromise from '../../../lib/mongodb';
import stripeInit from 'stripe';

const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });


export async function POST(request: NextRequest) {
    const { user }: { user: any } = (await getSession()) || { user: undefined };
    console.log(process.env.STRIPE_PRODUCT_PRICE_ID);
    const lineItems = [
        {
            price: process.env.STRIPE_PRODUCT_PRICE_ID,
            quantity: 1,
        },
    ];

    // const line_items = [
    //     {
    //         price_data: {
    //             currency: 'hkd', // specify the currency here
    //             product_data: {
    //                 name: '10 tokens', // specify the product name here
    //             },
    //             unit_amount: process.env.STRIPE_PRODUCT_PRICE_ID, // price in cents
    //         },
    //         quantity: 1,
    //     },
    // ],

    const protocol =
        process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
    const host = request.headers.get('host');

    const checkoutSession = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${protocol}${host}/post/success`,
        payment_intent_data: {
            metadata: {
                sub: user.sub,
            },
        },
        metadata: {
            sub: user.sub,
        },
    });

    // const client = await clientPromise;
    // try {
    //     client.db("BlogStandard").collection("users").updateOne(
    //         { auth0Id: user.sub }, { $inc: { availableTokens: 10 }, $setOnInsert: { auth0Id: user.sub } }, { upsert: true }
    //     );
    // } catch (error) {
    //     // console.log(error);
    //     return NextResponse.json({ error: "Not Content" }, { status: 422 });
    // }
    return NextResponse.json({ session: checkoutSession }, { status: 200 });
}
