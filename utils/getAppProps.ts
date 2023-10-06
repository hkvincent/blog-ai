import clientPromise from "@/lib/mongodb"
import { getSession } from "@auth0/nextjs-auth0"
import { ObjectId } from "mongodb"

export const getAppProps = async () => {

    const session = await getSession()
    const userSession = session?.user
    const client = await clientPromise;
    const db = client.db("BlogStandard");
    const user = await db.collection("users").findOne({
        auth0Id: userSession?.sub
    })

    if (!user) {
        return {
            availableTokens: 0,
            posts: [],
        }
    }

    const posts = await db.collection("posts").find({
        userId: user._id
    }).limit(parseInt(process.env.NEXT_PUBLIC_POSTS_PAGE_SIZE || "5")).sort({ created: -1 }).toArray();

    let hasMore = false
    if (Array.isArray(posts) && posts.length > 0) {
        const lastCreatedDate = posts[posts.length - 1].created;
        const hasMorePost = await db
            .collection('posts')
            .find({
                userId: user?._id,
                created: { ['$lt']: lastCreatedDate },
            })
            .limit(1)
            .sort({ created: -1 })
            .toArray();
        hasMore = Array.isArray(hasMorePost) && hasMorePost.length > 0;
    }

    console.log("hasMore", hasMore)

    return {
        availableTokens: user.availableTokens,
        hasMorePost: hasMore,
        posts: posts.map(({ created, _id, userId, ...rest }) => ({
            _id: _id.toString(),
            created: created.toString(),
            ...rest,
        })),
    }
}