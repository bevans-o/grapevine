import { Callback } from "mongodb";
import { Grape, User, Vine, Role, Bunch, GrapeStatus } from "./types";
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

export async function getGrape(grapeId : string): Promise<Grape> {
    return (await axios.post('/api/getGrape', {grapeId : grapeId})).data
}

// function getVine(id: string): Vine {}
export async function getVine(vineId : string): Promise<Vine> {
    return (await axios.post('/api/getVine', {vineId : vineId})).data
}

export async function addGrape(vineId: string, grape: Grape, bunchId: string, parentGrape: string) {
    return (await axios.post('/api/addNewGrape', {vineId: vineId, grape: grape, bunchId : bunchId, parentGrape : parentGrape})).data
}

export async function addNewBunch(bunch : Bunch, vineId : string): Promise<ObjectId> {
    return (await axios.post('/api/addNewBunch', {bunch : bunch, vineId: vineId})).data
}

export async function getAllUsers(): Promise<Array<User>> {
    return (await axios.post('/api/getAllUsers')).data
}

export async function getAllVines(): Promise<Array<Vine>> {
    return (await axios.post('/api/getAllVines')).data
}

export async function createVine(user : User): Promise<ObjectId> {
    return (await axios.post('/api/createVine', {user : user})).data
}

export async function voteYes(grapeId: string, voterId: string, status : GrapeStatus) {
    return (await axios.post('/api/voteYes', {grapeId : grapeId, voterId: voterId, status : status})).data
} // also update status

export async function voteNo(grapeId: string, voterId: string, status : GrapeStatus) {
    return (await axios.post('/api/voteNo', {grapeId : grapeId, voterId: voterId, status : GrapeStatus})).data
} // also update status