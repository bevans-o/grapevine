import axios, { AxiosError } from 'axios';
import { Vine } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';


export async function POST(req: Request, res: Response) {
    const response = await getUsers();
    
    return NextResponse.json(response);

}

async function getUsers() : Promise<Array<Vine>> {
    let vines : Array<Vine> = []
    let data  = MongoGlobal.getDb().collection("vines").find({})
    for await (const vine of data) {
        let res = JSON.stringify(vine)
        let jsonRes = await JSON.parse(res)
        vines.push(jsonRes)
    }
    return JSON.parse(JSON.stringify(vines))
    
}
