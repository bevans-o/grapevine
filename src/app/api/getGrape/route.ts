import axios, { AxiosError } from 'axios';
import { Vine, Bunch, Grape } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await getGrape(request.grapeId);
    console.log("receiving request")
    return NextResponse.json(response);

}

async function getGrape(grapeId :string ) {
    let jsonRes : any;
    let grapes : Grape[];

   let grape = await MongoGlobal.getInstance().getDb().collection("grapes").findOne({_id: new ObjectId(grapeId)});

   
   
    let data = JSON.stringify(grape)
    jsonRes = JSON.parse(data)

    grapes = await jsonRes.grapes ? await Promise.all(jsonRes.grapes.map(async (grapeId : string) => getGrape(grapeId))) : [];
    let yeses = await jsonRes.yeses ? await Promise.all(jsonRes.yeses.map(async (email : string) => getUser(email))) : [];
    let nos = await jsonRes.nos ? await Promise.all(jsonRes.nos.map(async (email : string) => getUser(email))) : [];
    let result : Grape = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, status : jsonRes.status, yeses: yeses, nos: nos, threshold: jsonRes.threshold, tags: jsonRes.tags, grapes: grapes}
    return result;
}


async function getUser(email : string) {
    let data  = await MongoGlobal.getInstance().getDb().collection("users").findOne({email: email})
    let res = JSON.stringify(data)
    let jsonRes = await JSON.parse(res)
    let user = { email: jsonRes.email, name: jsonRes.name, image: jsonRes.image, tags: jsonRes.tags, weight: jsonRes.weight, role: jsonRes.role}; 

    return user
}
