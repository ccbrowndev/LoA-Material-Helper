export type Level = {
  number: 1325 | 1340 | 1355 | 1370 | 1385 | 1400 | 1415 | 1445 | 1475;
};

export type Character = {
  iLevel: Level;
  amount: number;
  rested: boolean;
};
