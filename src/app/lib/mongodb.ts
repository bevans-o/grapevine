import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URI!);
export const mongodb = client.connect();
export const db = client.db("grapevine");