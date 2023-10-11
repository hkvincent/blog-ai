import clientPromise from "@/lib/mongodb"
import { getSession } from "@auth0/nextjs-auth0"
import { ObjectId } from "mongodb"
import { headers } from 'next/headers';

export const getAppProps = async () => {

    const session = await getSession()
    const userSession = session?.user
    const client = await clientPromise;
    const db = client.db("BlogStandard");
    const user = await db.collection("users").findOne({
        auth0Id: userSession?.sub
    })

    const headersList = headers();
    const ip = headersList.get("x-forwarded-for");
    console.log({ ip, headersList, session })

    if (!user) {
        // client.db("BlogStandard").collection("users").updateOne(
        //     { auth0Id }, { $inc: { availableTokens: 50 }, $setOnInsert: { auth0Id } }, { upsert: true }
        // );
        // Check if a user with the given IP address already exists
        // Extract the IP address without the port
        const fullIp = ip || "";
        const ipWithoutPort = fullIp.split(":")[0];

        // Check if a user with the given IP address already exists
        const existingUser = await db.collection('users').findOne({ ip: ipWithoutPort });

        // Initialize tokens based on whether the IP address is already registered
        const initialTokens = existingUser ? 0 : 5;

        // Insert the new user
        const insertResult = await db.collection('users').insertOne({
            auth0Id: userSession?.sub,
            userName: userSession?.name,
            email: userSession?.email,
            availableTokens: initialTokens,
            createdAt: new Date(),
            lastLogin: new Date(),
            ip: ipWithoutPort,
        });

        return {
            availableTokens: initialTokens,
        };
    }

    // const posts = await db.collection("posts").find({
    //     userId: user._id
    // }).limit(parseInt(process.env.NEXT_PUBLIC_POSTS_PAGE_SIZE || "5")).sort({ created: -1 }).toArray();

    // let hasMore = false
    // if (Array.isArray(posts) && posts.length > 0) {
    //     const lastCreatedDate = posts[posts.length - 1].created;
    //     const hasMorePost = await db
    //         .collection('posts')
    //         .find({
    //             userId: user?._id,
    //             created: { ['$lt']: lastCreatedDate },
    //         })
    //         .limit(1)
    //         .sort({ created: -1 })
    //         .toArray();
    //     hasMore = Array.isArray(hasMorePost) && hasMorePost.length > 0;
    // }

    return {
        availableTokens: user.availableTokens,
        // posts: posts.map(({ created, _id, userId, ...rest }) => ({
        //     _id: _id.toString(),
        //     created: created.toString(),
        //     ...rest,
        // })),
    }
}