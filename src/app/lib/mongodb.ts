import { MongoClient, Db } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URI!);
export const mongodb = client.connect();
export const db = client.db("grapevine");


class MongoGlobal {
    private static _instance: MongoGlobal;
    private static _client: MongoClient;
    private static _clientPromise: Promise<MongoClient>;
    private static _db : Db;

    private constructor(uri: string) { 
        MongoGlobal._client = new MongoClient(uri)
        MongoGlobal._clientPromise = MongoGlobal._client.connect();
        MongoGlobal._db = MongoGlobal._client.db("grapevine")
    }

    public getPromise() { return MongoGlobal._clientPromise}

    public getDb() { return MongoGlobal._db}

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new MongoGlobal(process.env.MONGODB_URI!);
        return this._instance;
    }
}

export default MongoGlobal;