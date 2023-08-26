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
    return MongoGlobal.getInstance().getDb().collection("vines").findOne({_id: new ObjectId(vineId)}).then((res) => {
        let data = JSON.stringify(res)
        let jsonRes = JSON.parse(data)
        let bunches = jsonRes.bunches ? jsonRes.bunches.map((bunchId: string) => getBunch(bunchId)) : [];
        let grapes = jsonRes.grapes ? jsonRes.grapes.map((grapeId: string) => getGrape(grapeId)) : [];
        let vine : Vine = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, owner: jsonRes.owner, bunches: bunches, grapes: grapes}
        return vine
    }).catch((error) => {
        return error
    })
}

async function getBunch(bunchId : string) {
    return MongoGlobal.getInstance().getDb().collection("bunches").findOne({_id: new ObjectId(bunchId)}).then((res) => {
        let data = JSON.stringify(res)
        let jsonRes = JSON.parse(data)
        let grapes = jsonRes.grapes ? jsonRes.grapes.map((grapeId : string) => getGrape(grapeId)) : [];
        let bunch : Bunch = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, grapes: grapes}
        return bunch;
    })
    
}

async function getGrape(grapeId :string ) {
    console.log(grapeId)
    return MongoGlobal.getInstance().getDb().collection("grapes").findOne({_id: new ObjectId(grapeId)}).then((res) => {
        let data = JSON.stringify(res)
        let jsonRes = JSON.parse(data)
        let grapes = jsonRes.grapes ?  jsonRes.grapes.map((grapeId : string) => getGrape(grapeId)) : [];
        let grape : Grape = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, status : jsonRes.status, yeses: jsonRes.yeses, nos: jsonRes.nos, threshold: jsonRes.threshold, tags: jsonRes.tags, grapes: grapes}
        return grape;
    })
}
