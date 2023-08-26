import axios, { AxiosError } from 'axios';
import { User, Role, Bunch, GrapeStatus } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';
import { ObjectId } from 'mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await voteNo(request.grapeId, request.voterId, request.status);
    return NextResponse.json(response);

}

async function voteNo(grapeId: string, voterId: string, status : GrapeStatus) {
    return MongoGlobal.getInstance().getDb().collection("grapes").updateOne({_id : new ObjectId(grapeId)}, {$push: {nos : voterId}, $set : {status: status}})
}