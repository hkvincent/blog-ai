import { MongoClient } from 'mongodb';

const uri = "";

let client;
/** @type {Promise<MongoClient>} */
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;

async function connectDB() {
    try {
        const client = await clientPromise;
        const db = client.db('BlogStandard');

        try {
            await db.collection('posts').createIndex({ title: "text", content: "text" });
            console.log("Index created");
        } catch (error) {
            console.error("Error creating index:", error);
        }

        // Wait for a few seconds before checking for the index
        await new Promise(resolve => setTimeout(resolve, 5000));

        const indexCursor = await db.collection('posts').listIndexes();
        const indexes = await indexCursor.toArray();
        const textIndexExists = indexes.some(index => 'text' in index.key);

        if (textIndexExists) {
            console.log("Text index exists.");
        } else {
            console.log("Text index does not exist.");
        }

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB().then(db => {
    // Additional logic here if needed
});

