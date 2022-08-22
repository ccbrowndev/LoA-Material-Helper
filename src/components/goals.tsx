import { useContext } from "react";
import { CharacterContext } from "../App";

export default function Goals() {
  const { characterArray, setCharacterArray } = useContext(CharacterContext);

  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Goals
        </summary>
        <div>
          <label className=''>
            Select a goal
            <select className='text-black'>
              {/* Variables:  */}
              <option value='20wep21'>1340 Weapon +20 to +21</option>
              <option value='1340alt1370'>1340 Alt to 1370</option>
              <option value='custom'>Custom goal</option>
            </select>
          </label>
          <div>
            <span>
              Total reds:{" "}
              {characterArray.reduce((acc, curr) => {
                return acc + curr.totalMaterials.totalReds;
              }, 0)}
            </span>
          </div>
        </div>
      </details>
    </div>
  );
}
