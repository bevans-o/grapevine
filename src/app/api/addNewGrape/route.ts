import axios, { AxiosError } from 'axios';
import { User, Role, Bunch } from '../../lib/types'
import { NextResponse } from 'next/server';
import {db} from '../../lib/mongodb';
import { json } from 'stream/consumers';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await addBunch(request.bunch, request.vineId);
    console.log(request.vineId)
    return NextResponse.json(response);

}

async function addBunch(bunch: Bunch, vineId : string) {
    return db.collection("vines").updateOne({_id : new ObjectId(vineId)}, { $push : {bunches : bunch}}).then(
        (res) => {if(res.acknowledged) { 
            return res.upsertedId
        } else 
        return -1
    }
    )
}
