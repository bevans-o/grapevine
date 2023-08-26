import { Grape, GrapeStatus, Role, Vine } from "./types";

const sampleUser = {
    id: "bcevans@student.unimelb.edu.au",
    name: "Ben Evans",
    image: "",
    tags: [
        { name: "frontend" }
    ],
    weight: 2,
    role: Role.ADMIN
}

export const sampleGrape: Grape = {
    id: "as8913jiasd1i3",
    name: "Dogs should be allowed in the office.",
    desc: "Dogs of any size will be allowed in the office. The owner must supervise the dog at all times. Any doggy doo doo is purely the responsibility of the owner.",
    status: GrapeStatus.OPEN,
    yeses: [],
    nos: [],
    threshold: 80,
    tags: [{ name: "frontend" }],
    grapes: []
}

export const sampleVine: Vine = {
    id: "2834872384",
    name: "Test Vine",
    desc: "This is a vine for testing purposes. Yum yum.",
    owner: sampleUser,
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
                    yeses: [sampleUser],
                    nos: [],
                    threshold: 80,
                    tags: [{ name: "frontend" }],
                    grapes: []
                },
                {
                    id: "01kkdf002o34",
                    name: "Papyrus as primary font family.",
                    desc: "",
                    status: GrapeStatus.OPEN,
                    yeses: [sampleUser],
                    nos: [],
                    threshold: 80,
                    tags: [{ name: "frontend" }],
                    grapes: [
                        {
                            id: "01kkdf002o34",
                            name: "Urbanist as primary font family.",
                            desc: "",
                            status: GrapeStatus.OPEN,
                            yeses: [sampleUser],
                            nos: [],
                            threshold: 80,
                            tags: [{ name: "frontend" }],
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
                    nos: [sampleUser],
                    threshold: 50,
                    tags: [{ name: "frontend" }],
                    grapes: []
                },
                sampleGrape
            ]
        }
    ]
}