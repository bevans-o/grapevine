import axios, { AxiosError } from 'axios';
import { User, Role, Bunch, Grape} from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { json } from 'stream/consumers';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await addGrape(request.grape, request.vineId, request.bunchId, request.parentId);
    return NextResponse.json(response);

}

async function addGrape(grape: Grape, vineId : string, bunchId: string, parentGrape: string) {
    return MongoGlobal.getDb().collection("grapes").insertOne({name: grape.name, desc: grape.desc, threshold: grape.threshold, status: grape.status,
    yeses : grape.yeses, nos: grape.nos, tags: grape.tags, grapes: grape.grapes}).then(
        (res) => {
            if(bunchId){
                MongoGlobal.getDb().collection("bunches").updateOne({_id : new ObjectId(bunchId)}, { $push : {grapes : res.insertedId}})
            }
            else if (parentGrape){
                MongoGlobal.getDb().collection("grapes").updateOne({_id : new ObjectId(parentGrape)}, { $push : {grapes : res.insertedId}})
            }
            else {
                MongoGlobal.getDb().collection("vines").updateOne({_id : new ObjectId(vineId)}, { $push : {grapes : res.insertedId}})
            }
            return res.insertedId.toString();
        }
    )
}
