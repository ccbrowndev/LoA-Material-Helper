export type Level = {
  number: 1325 | 1340 | 1355 | 1370 | 1385 | 1400 | 1415 | 1445 | 1460 | 1475;
};

export type Character = {
  id: number;
  name?: string;
  iLevel: Level;
  amount: number;
  rested: boolean;
  isTargeted: boolean;
  totalMaterials: {
    totalReds: number;
    totalBlues: number;
    guardianLeaps: number;
    chaosLeaps: number;
    totalShards: number;
  };
};
