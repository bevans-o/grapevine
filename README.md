## Inspiration

## What it does
Grapevine is a collaborative decision-making tool that allows a team to break their decisions down into smaller parts to achieve consensus. Users create 'vines' (large level decisions) that each have 'bunches' (groups or folders) of 'grapes' (atomic decisions to be voted on). Team members can have different voting power (perhaps based on seniority) and have tags representing their areas of expertise. Different grapes can have different tags describing the relevant expertises to that decision. When a team member with a certain expertise votes on a grape that has a matching expertise, the value of their vote is doubled. Users can view the relationship between the bunches and grapes in a vine in an interactive graph.

## How we built it
We built Grapevine in Next.js with a MongoDB database. We made the graph with D3.js.

## Challenges we ran into
Accidental infinite queries of the database and hitting connection limits (and the ambitious project scope). Recursive nesting of objects in the vine.

## Accomplishments that we're proud of
- the scope and ambition of the project in the short deadline
- no prebuilt UI components except the MUI slider
- the backend
- the bubbles
- the buttons

## What we learned
D3, Next.js Routing, Mongo

## What's next for Grapevine
- associate users with specific organisations
- prompt users to vote
- automatic actions when a vote passes or fails
- multiple choice grapes