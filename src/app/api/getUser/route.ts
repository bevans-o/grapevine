import axios, { AxiosError } from 'axios';
import { User, Role } from '../../lib/types'
import { NextResponse } from 'next/server';
import MongoGlobal from '../../lib/mongodb';


export async function POST(req: Request, res: Response) {
    const request = await req.json();
    const response = await getUser(request.email);
    
    return NextResponse.json(response);

}

async function getUser(email: string) : Promise<User> {
    let user : User = {email : "", name: "", image: "", 
    tags: [], weight: 0, role: Role.USER}
    let data  = await MongoGlobal.getDb().collection("users").findOne({email: email})
    if (data){
        let res = JSON.stringify(data)
        let jsonRes = await JSON.parse(res)
        user = { email: jsonRes.email, name: jsonRes.name, image: jsonRes.image, tags: jsonRes.tags, weight: jsonRes.weight, role: jsonRes.role}; 
    
    }

    return user
}
