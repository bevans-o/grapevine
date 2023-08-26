import axios, { AxiosError } from 'axios';
import { User, Role } from '../../lib/types'
import { NextResponse } from 'next/server';
import {db} from '../../lib/mongodb';


export async function POST(req: Request, res: Response) {
    const response = await getUsers();
    
    return NextResponse.json(response);

}

async function getUsers() : Promise<Array<User>> {
    let users : Array<User> = []
    let data  = db.collection("users").find({})
    for await (const user of data) {
        let res = JSON.stringify(user)
        let jsonRes = await JSON.parse(res)
        users.push(jsonRes)
    }
    return JSON.parse(JSON.stringify(users))
    
}
