import { Callback } from "mongodb";
import { Grape, User, Vine, Role } from "./types";
import axios from "axios";
import { ObjectId } from "mongodb";



export async function getUser(email: string, setUser: Function) {
    let emptyUser : User = {email : "", name: "", image: "", 
    tags: [], weight: 0, role: Role.USER}
    let user : User;
    if (email == "") {
        setUser(emptyUser);
    }
    axios.post('/api/getUser', {email: email})
    .then((res) =>{
        setUser(res.data)
    }
    )
    .catch((error) => {
        setUser(emptyUser)
    })
    
}

// function getCurrentUser(): User {}

// function getVine(id: string): Vine {}

// function addGrape(parentId: string, grape: Grape) {}

export async function getAllUsers(): Promise<Array<User>> {
    return (await axios.post('/api/getAllUsers')).data
}

// function getAllVines(): Vine[] {}

export async function createVine(user : User): Promise<ObjectId> {
    return (await axios.post('/api/createVine', {user : user})).data
}

// function voteYes(grapeId: string, voterId: string) {} // also update status

// function voteNo(grapeId: string, voterId: string) {} // also update status