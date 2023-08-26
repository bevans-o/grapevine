import axios, { AxiosError } from 'axios';
import { Vine} from '../../lib/types'
import { NextResponse } from 'next/server';
import {db} from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { error } from 'console';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await getVine(request.vineId);
    
    return NextResponse.json(response);

}

async function getVine(vineId: string) : Promise<Vine> {
    return db.collection("vines").findOne({_id: new ObjectId(vineId)}).then((res) => {
        let data = JSON.stringify(res)
        let jsonRes = JSON.parse(data)
        let vine : Vine = {id: jsonRes._id, name: jsonRes.name, desc: jsonRes.description, owner: jsonRes.owner, bunches: jsonRes.bunches, grapes: jsonRes.grapes}
        return vine
    }).catch((error) => {
        return error
    })
}
