import { useContext, useState } from "react";
import { CharacterContext } from "../App";
import { Character } from "../types/character";
import { materialData } from "../utils/materialData";

export default function Goals() {
  const [characterArray, setCharacterArray] = useState(
    useContext(CharacterContext)
  );
  const [resources, setResources] = useState({
    reds: 0,
    blues: 0,
    leaps: 0,
    shards: 0,
  });

  const setValues = (character: Character) => {
    setResources({
      reds: resources.reds + character.totalMaterials.totalReds,
      blues: resources.blues + character.totalMaterials.totalBlues,
      leaps: resources.leaps + character.totalMaterials.totalLeaps,
      shards: resources.shards + character.totalMaterials.totalShards,
    });
  };

  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Goals
        </summary>
        <div>
          <label className=''>
            Select a goal
            <select className='text-black' onSelect={(e) => setValues}>
              {/* Variables:  */}
              <option value='20wep21'>1340 Weapon +20 to +21</option>
              <option value='1340alt1370'>1340 Alt to 1370</option>
              <option value='custom'>Custom goal</option>
            </select>
          </label>
          <div className=''>
            <span>{`Red resources: ${resources.reds}`}</span>
          </div>
        </div>
      </details>
    </div>
  );
}
