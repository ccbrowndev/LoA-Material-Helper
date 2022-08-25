import { useContext } from "react";
import { CharacterContext } from "../App";
import AnimatingNumber from "../utils/animating-number";

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
          <div className='flex justify-between'>
            <span className='p-4 text-red-400 sm:text-xs text-base font-medium'>
              Total reds <br />
              <span className='sm:text-xl text-4xl font-extrabold transition-transform'>
                <AnimatingNumber
                  value={characterArray.reduce((acc, curr) => {
                    return acc + curr.totalMaterials.totalReds * curr.amount;
                  }, 0)}
                />
              </span>
            </span>
            <span className='p-4 text-blue-400 sm:text-xs text-base font-medium'>
              Total blues <br />
              <span className='sm:text-xl text-4xl font-extrabold'>
                <AnimatingNumber
                  value={characterArray.reduce((acc, curr) => {
                    return acc + curr.totalMaterials.totalBlues * curr.amount;
                  }, 0)}
                />
              </span>
            </span>
            <span className='p-4 text-yellow-400 sm:text-xs text-base font-medium'>
              Total Leaps <br />
              <span className='sm:text-xl text-4xl font-extrabold'>
                <AnimatingNumber
                  value={characterArray.reduce((acc, curr) => {
                    return acc + curr.totalMaterials.totalLeaps * curr.amount;
                  }, 0)}
                />
              </span>
            </span>
            <span className='p-4 text-emerald-400 sm:text-xs text-base font-medium'>
              Total Shards <br />
              <span className='sm:text-xl text-4xl font-extrabold'>
                <AnimatingNumber
                  value={characterArray.reduce((acc, curr) => {
                    return acc + curr.totalMaterials.totalShards * curr.amount;
                  }, 0)}
                />
              </span>
            </span>
          </div>
        </div>
      </details>
    </div>
  );
}
