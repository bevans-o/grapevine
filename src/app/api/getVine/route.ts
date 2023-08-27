import axios, { AxiosError } from 'axios';
import { Vine, Bunch, Grape } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { error } from 'console';
import { json } from 'd3';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await getVine(request.vineId);
    
    return NextResponse.json(response);

}

async function getVine(vineId: string) : Promise<Vine> {
    let jsonRes : any;
    let bunches : Bunch[];
    let grapes : Grape[];

    let vine = await MongoGlobal.getDb().collection("vines").findOne({_id: new ObjectId(vineId)})

    let data = JSON.stringify(vine)
    jsonRes = JSON.parse(data)
    
    bunches = await jsonRes.bunches ? await Promise.all(jsonRes.bunches.map(async (bunchId: string) => getBunch(bunchId))) : [];

    grapes = await jsonRes.grapes ? await Promise.all(jsonRes.grapes.map(async (grapeId: string) => getGrape(grapeId))) : [];

    let result : Vine = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, owner: jsonRes.owner, bunches: bunches, grapes: grapes}
    return result;
}

async function getBunch(bunchId : string) {
    let jsonRes : any;
    let grapes: Grape[];

    let bunch = await MongoGlobal.getDb().collection("bunches").findOne({_id: new ObjectId(bunchId)});

    let data = JSON.stringify(bunch)
    jsonRes = JSON.parse(data)
    
    grapes = await jsonRes.grapes ? await Promise.all(jsonRes.grapes.map(async (grapeId : string) => getGrape(grapeId))) : [];
    
    let result : Bunch = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, grapes: grapes}
    return result;

}

async function getGrape(grapeId :string ) {
    let jsonRes : any;
    let grapes : Grape[];

   let grape = await MongoGlobal.getDb().collection("grapes").findOne({_id: new ObjectId(grapeId)})
   
   
    let data = JSON.stringify(grape)
    jsonRes = JSON.parse(data)

    grapes = await jsonRes.grapes ? await Promise.all(jsonRes.grapes.map(async (grapeId : string) => getGrape(grapeId))) : [];
    let result : Grape = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, status : jsonRes.status, yeses: jsonRes.yeses, nos: jsonRes.nos, threshold: jsonRes.threshold, tags: jsonRes.tags, grapes: grapes}
    return result;
}
