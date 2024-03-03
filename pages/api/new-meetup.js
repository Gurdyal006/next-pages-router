import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // "mongodb+srv://nextjs13:nextjs13@cluster0.w9pypw6.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    const client = await MongoClient.connect(process.env.DB_CONNECT);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
