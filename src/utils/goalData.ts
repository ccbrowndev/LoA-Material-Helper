import { Goal } from '../types/goal';

const goal1340_20wep21: Goal = {
  id: '1340_20wep21',
  name: '1340 Weapon +20 to +21',
  redsRequired: 22716,
  bluesRequired: 0,
  leapsRequired: 595,
  shardsRequired: 85502,
};

const goal1340alt1370: Goal = {
  id: '1340alt1370',
  name: '1340 alt to 1370',
  redsRequired: 2109,
  bluesRequired: 6327,
  leapsRequired: 266,
  shardsRequired: 25295,
};

const goalCustom: Goal = {
  id: 'custom',
  name: 'custom',
  redsRequired: 0,
  bluesRequired: 0,
  leapsRequired: 0,
  shardsRequired: 0,
};

export const goalData = new Map([
  [goal1340_20wep21.name, goal1340_20wep21],
  [goal1340alt1370.name, goal1340alt1370],
  [goalCustom.name, goalCustom],
]);
