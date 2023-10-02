import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import stripeInit, { Stripe } from 'stripe';
import { headers } from 'next/headers'

export const config = {
    api: {
        bodyParser: false,
    },
};


const stripe = new stripeInit(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
// 4242 4242 4242 4242
export async function POST(request: NextRequest) {
    // get stripe-signature from header
    const headersList = headers()
    const stripeSignature = headersList.get('stripe-signature')
    const body = await request.text();

    let event: Stripe.Event | undefined;
    try {
        event = stripe.webhooks.constructEvent(body, stripeSignature!, webhookSecret!);
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err}`);
        return new NextResponse(`Webhook error: ${err}`, {
            status: 400,
        })
    }
    console.log('event: ', event?.type);
    switch (event?.type) {
        case 'payment_intent.succeeded': {
            const client = await clientPromise;
            const paymentIntent: any = event.data.object;
            const auth0Id = paymentIntent.metadata.sub;
            try {
                client.db("BlogStandard").collection("users").updateOne(
                    { auth0Id }, { $inc: { availableTokens: 10 }, $setOnInsert: { auth0Id } }, { upsert: true }
                );
            } catch (error) {
                return NextResponse.json({ message: "Error", error }, { status: 500 });
            }
            break;
        }
        default:
            console.log('UNHANDLED EVENT: ', event?.type);
            break;
    }
    return NextResponse.json({ received: true }, { status: 200 });
}