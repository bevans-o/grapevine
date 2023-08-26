export interface User {
    id: string;
    name: string;
    image: string;
    tags: Tag[]
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
    bunches?: Bunch[];
}

export interface Bunch {
    id: string;
    name: string;
    desc: string;
    grapes?: Grape[]
}

export interface Grape {
    id: string;
    name: string;
    desc: string;
    status: GrapeStatus;
    yeses: User[];
    nos: User[];
    undecided: User[];
    threshold: number;
    tags: Tag[];
    grapes?: Grape[];
}

export enum GrapeStatus {
    OPEN,
    PASSED,
    FAILED
}