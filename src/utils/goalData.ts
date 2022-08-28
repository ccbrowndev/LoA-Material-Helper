import { Goal } from "../types/goal";

const goal20wep21: Goal = {
  name: "20wep21",
  redsRequired: 22716,
  bluesRequired: 0,
  leapsRequired: 595,
  shardsRequired: 85502,
};

const goal1340alt1370: Goal = {
  name: "1340alt1370",
  redsRequired: 2109,
  bluesRequired: 6327,
  leapsRequired: 266,
  shardsRequired: 25295,
};

export const goalData = new Map([
  [goal20wep21.name, goal20wep21],
  [goal1340alt1370.name, goal1340alt1370],
]);

export const goals = [
  {
    name: "custom",
    redsRequired: 0,
    bluesRequired: 0,
    leapsRequired: 0,
    shardsRequired: 0,
  },
  {
    name: "20wep21",
    redsRequired: 22716,
    bluesRequired: 0,
    leapsRequired: 595,
    shardsRequired: 85502,
  },
  {
    name: "1340alt1370",
    redsRequired: 2109,
    bluesRequired: 6327,
    leapsRequired: 266,
    shardsRequired: 25295,
  },
  {
    name: "1355alt1370",
    redsRequired: 1607,
    bluesRequired: 5739,
    leapsRequired: 233,
    shardsRequired: 21043,
  },
];
