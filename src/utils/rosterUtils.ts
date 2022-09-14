import { Character, Level } from '../types/character';

export function convertToLevel(level: number): Level {
  let newLevel: Level = { number: 1325 };
  switch (true) {
    case level < 1325:
      alert('This tool is designed for characters iLevel 1325 and above');
      throw new Error(
        'This tool is designed for characters iLevel 1325 and above'
      );
    case level >= 1325 && level < 1340:
      newLevel = { number: 1325 };
      break;
    case level >= 1340 && level < 1355:
      newLevel = { number: 1340 };
      break;
    case level >= 1355 && level < 1370:
      newLevel = { number: 1355 };
      break;
    case level >= 1370 && level < 1385:
      newLevel = { number: 1370 };
      break;
    case level >= 1385 && level < 1400:
      newLevel = { number: 1385 };
      break;
    case level >= 1400 && level < 1415:
      newLevel = { number: 1400 };
      break;
    case level >= 1415 && level < 1445:
      newLevel = { number: 1415 };
      break;
    case level >= 1445 && level < 1460:
      newLevel = { number: 1445 };
      break;
    case level >= 1460 && level < 1475:
      newLevel = { number: 1460 };
      break;
    case level >= 1475:
      newLevel = { number: 1475 };
      break;
  }
  return newLevel;
}

//Adjusts the amount of mats based on certain item level breakpoints
//Will need updated again at a later date for brelshaza gear breakpoints
function convertMatsBasedOnLevel(
  inputLevel: number,
  targetCharLevel: number,
  materialAmount: number
) {
  let convertedMatAmount;
  if (Math.floor(materialAmount * 0.2) <= 0) convertedMatAmount = 1;
  else convertedMatAmount = Math.floor(materialAmount * 0.2);

  if (inputLevel < 1370 && targetCharLevel >= 1370) return convertedMatAmount;
  if (inputLevel >= 1370 && targetCharLevel < 1370) return 0;
  return materialAmount;
}

export function getRosterMaterials(charArray: Character[]) {
  let reds = 0;
  let blues = 0;
  let leaps = 0;
  let shards = 0;
  let targetLevel = 0;

  //Targeted character level must be found before materials conversion
  charArray.forEach((char) => {
    if (char.isTargeted) targetLevel = char.iLevel.number;
  });

  reds = charArray.reduce((acc, curr) => {
    return acc + curr.totalMaterials.totalReds * curr.amount;
  }, 0);

  blues = charArray.reduce((acc, curr) => {
    return acc + curr.totalMaterials.totalBlues * curr.amount;
  }, 0);

  charArray.forEach((char) => {
    if (char.isTargeted) {
      leaps +=
        char.totalMaterials.chaosLeaps +
        char.totalMaterials.guardianLeaps * char.amount;
    } else {
      leaps += convertMatsBasedOnLevel(
        char.iLevel.number,
        targetLevel,
        char.totalMaterials.guardianLeaps * char.amount
      );
    }
  });

  shards = charArray.reduce((acc, curr) => {
    if (curr.isTargeted) {
      return curr.totalMaterials.totalShards;
    } else return acc;
  }, 0);

  return {
    totalReds: reds,
    totalBlues: blues,
    totalLeaps: leaps,
    totalShards: shards,
  };
}
