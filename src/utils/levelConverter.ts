import { Level } from "../types/character";

export function convertToLevel(level: number): Level {
  let newLevel: Level = { number: 1325 };
  switch (true) {
    case level < 1325:
      alert("This tool is designed for characters iLevel 1325 and above");
      throw new Error(
        "This tool is designed for characters iLevel 1325 and above"
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
    case level >= 1445 && level < 1475:
      newLevel = { number: 1445 };
      break;
    case level >= 1475:
      newLevel = { number: 1475 };
      break;
  }
  return newLevel;
}
