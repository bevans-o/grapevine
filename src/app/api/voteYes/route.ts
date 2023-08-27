import axios, { AxiosError } from 'axios';
import { User, Role, Bunch, GrapeStatus } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { json } from 'stream/consumers';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await voteYes(request.grapeId, request.voterId, request.status);
    return NextResponse.json(response);

}

async function voteYes(grapeId: string, voterId: string, status : GrapeStatus) {
    return MongoGlobal.getDb().collection("grapes").updateOne({_id : new ObjectId(grapeId)}, {$push: {yeses : voterId}, $set : {status: status}})
}
