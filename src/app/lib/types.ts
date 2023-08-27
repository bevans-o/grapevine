export interface User {
    email: string;
    name: string;
    image: string;
    tags: string[]
    weight: number;
    role: Role;
}

export enum Role {
    USER,
    ADMIN
}

export interface Tag {
    name: string;
}

export interface Vine {
    id: string;
    name: string;
    desc: string;
    owner: User;
    bunches: Bunch[];
    grapes: Grape[];
}

export interface Bunch {
    id: string;
    name: string;
    desc: string;
    grapes: Grape[]
}

export interface Grape {
    id: string;
    name: string;
    desc: string;
    status: GrapeStatus;
    yeses: User[];
    nos: User[];
    threshold: number;
    tags: string[];
    grapes: Grape[];
}

export enum GrapeStatus {
    OPEN = "OPEN",
    PASSED = "PASSED",
    FAILED = "FAILES",
}