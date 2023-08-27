import { Grape, GrapeStatus, Role, User, Vine } from "./types";

export const sampleUsers: User[] = [
    {
        email: "bcevans@student.unimelb.edu.au",
        name: "Ben Evans",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80",
        tags: [
            "frontend"
        ],
        weight: 2,
        role: Role.ADMIN
    },
    {
        email: "pippi@gmail.com",
        name: "Pippi Pinklewinkle",
        image: "",
        tags: [
            "frontend"
        ],
        weight: 1,
        role: Role.USER
    },
    {
        email: "bert@gmail.com",
        name: "Bert Jongli",
        image: "https://images6.fanpop.com/image/photos/40200000/Trending-Facebook-Profile-Pictures-Of-Boys-emo-boys-40268071-1537-2431.jpg",
        tags: [
            "backend"
        ],
        weight: 2,
        role: Role.USER
    },
    {
        email: "rpais@student.unimelb.edu.au",
        name: "Risa Pais",
        image: "",
        tags: [
            "backend"
        ],
        weight: 3,
        role: Role.ADMIN
    },
    {
        email: "tata@gmail.com",
        name: "Tata Tutu",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        tags: [
            "design"
        ],
        weight: 1,
        role: Role.USER
    },
    {
        email: "yessica@gmail.com",
        name: "Yessica Noway",
        image: "",
        tags: [
            "design"
        ],
        weight: 1,
        role: Role.USER
    },
    {
        email: "nancy@gmail.com",
        name: "Nancy Neverlyn",
        image: "",
        tags: [
            "frontend",
            "backend"
        ],
        weight: 1,
        role: Role.USER
    }
]

export const sampleGrape: Grape = {
    id: "as8913jiasd1i3",
    name: "Dogs should be allowed in the office.",
    desc: "Dogs of any size will be allowed in the office. The owner must supervise the dog at all times. Any doggy doo doo is purely the responsibility of the owner.",
    status: GrapeStatus.OPEN,
    yeses: [],
    nos: [],
    threshold: 80,
    tags: ["frontend"],
    grapes: []
}

export const sampleVine: Vine = {
    id: "2834872384",
    name: "Test Vine",
    desc: "This is a vine for testing purposes. Yum yum.",
    owner: sampleUsers[3],
    grapes: [],
    bunches: [
        {
            id: "1s098df01239",
            name: "Design",
            desc: "Protocols for design and art direction.",
            grapes: [
                {
                    id: "asd92394jsjdfi",
                    name: "All text should be pink.",
                    desc: "",
                    status: GrapeStatus.OPEN,
                    yeses: [sampleUsers[3], sampleUsers[2], sampleUsers[5]],
                    nos: [sampleUsers[0]],
                    threshold: 30,
                    tags: ["frontend"],
                    grapes: []
                },
                {
                    id: "01kkdf002o34",
                    name: "Papyrus as primary font family.",
                    desc: "",
                    status: GrapeStatus.FAILED,
                    yeses: [sampleUsers[1]],
                    nos: [sampleUsers[6], sampleUsers[4], sampleUsers[3], sampleUsers[2]],
                    threshold: 80,
                    tags: ["frontend"],
                    grapes: [
                        {
                            id: "08adiujurj99df",
                            name: "Urbanist as primary font family.",
                            desc: "",
                            status: GrapeStatus.PASSED,
                            yeses: [sampleUsers[6], sampleUsers[4], sampleUsers[3], sampleUsers[2], sampleUsers[1], sampleUsers[0]],
                            nos: [sampleUsers[5]],
                            threshold: 80,
                            tags: ["frontend"],
                            grapes: []
                        }
                    ]
                }
            ]
        },
        {
            id: "09sf0ui3ji4jo5",
            name: "Office",
            desc: "Rules that apply to the communal office space.",
            grapes: [
                {
                    id: "1239isdfk2",
                    name: "If food isn't labelled, it is free for anyone to take and eat.",
                    desc: "",
                    status: GrapeStatus.OPEN,
                    yeses: [],
                    nos: [sampleUsers[1]],
                    threshold: 50,
                    tags: ["frontend"],
                    grapes: []
                },
                sampleGrape
            ]
        }
    ]
}


export const emptyVine: Vine = {
    id: "loading",
    name: "Loading",
    desc: "Vine loading...",
    owner: sampleUsers[0],
    grapes: [],
    bunches: []
}