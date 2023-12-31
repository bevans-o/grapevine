import axios, { AxiosError } from 'axios';
import { User, Role, Bunch } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { json } from 'stream/consumers';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await addBunch(request.bunch, request.vineId);
    return NextResponse.json(response);

}

async function addBunch(bunch: Bunch, vineId : string) {
    return MongoGlobal.getDb().collection("bunches").insertOne({name: bunch.name, desc: bunch.desc, grapes: bunch.grapes}).then((res) => {
        let id = res.insertedId
        bunch.id = id.toString()
        MongoGlobal.getDb().collection("vines").updateOne({_id : new ObjectId(vineId)}, { $push : {bunches : id}})
        return id;
    })
}
