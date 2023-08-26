import axios, { AxiosError } from 'axios';
import { User, Role, Bunch, Grape} from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal, {db} from '../../lib/mongodb';
import { json } from 'stream/consumers';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    console.log("routing correctly")
    const request = await req.json();
    const response = await addGrape(request.grape, request.vineId, request.bunchId, request.parentId);
    return NextResponse.json(response);

}

async function addGrape(grape: Grape, vineId : string, bunchId: Bunch, parentGrape: string) {
    MongoGlobal.getInstance().getDb().collection("grapes").insertOne(grape).then(
        (res) => {
            if(bunchId){
                MongoGlobal.getInstance().getDb().collection("bunches").updateOne({_id : new ObjectId(bunchId.id)}, { $push : {grapes : res.insertedId}})
            }
            else if (parentGrape){
                MongoGlobal.getInstance().getDb().collection("grapes").updateOne({_id : new ObjectId(parentGrape)}, { $push : {grapes : res.insertedId}})
            }
            else {
                MongoGlobal.getInstance().getDb().collection("vines").updateOne({_id : new ObjectId(vineId)}, { $push : {grapes : res.insertedId}})
            }
            return res.insertedId.toString();
        }
    )
}
