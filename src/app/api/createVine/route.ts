import axios, { AxiosError } from 'axios';
import { User, Role } from '../../lib/types'
import { NextResponse } from 'next/server';
import {db} from '../../lib/mongodb';
import { json } from 'stream/consumers';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await createVine(request.user.email);
    
    return NextResponse.json(response);

}

async function createVine(email: string) {
    return db.collection("vines").insertOne({name: "", description: "", owner: email, bunches: [], grapes: []}).then(
        (res) => {if(res.acknowledged) { 
            return res.insertedId
        } else 
        return -1
    }
    )
}
