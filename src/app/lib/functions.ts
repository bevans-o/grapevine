import { Grape, User, Vine } from "./types";

function getUser(id: string): User {}

function getCurrentUser(): User {}

function getVine(id: string): Vine {}

function addGrape(parentId: string, grape: Grape) {}

function getAllUsers(): User[] {}

function getAllVines(): Vine[] {}

function createVine(): Vine {}

function voteYes(grapeId: string, voterId: string) {} // also update status

function voteNo(grapeId: string, voterId: string) {} // also update status