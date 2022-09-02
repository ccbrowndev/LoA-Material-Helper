import { useContext } from "react";
import { CharacterContext } from "../App";
import AnimatingNumber from "../utils/animating-number";
import { Character } from "../types/character";

export default function MaterialSum() {
  const { characterArray, setCharacterArray } = useContext(CharacterContext);

  return (
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
          //Returns guardian leapstones for all non-targeted characters and totalLeaps for the isTargeted character
            value={characterArray.reduce((acc, curr) => {
              if(curr.isTargeted) {
                 return acc + curr.totalMaterials.chaosLeaps + (curr.totalMaterials.guardianLeaps * curr.amount);
                 } else return acc + curr.totalMaterials.guardianLeaps * curr.amount;
              } , 0)}
          />
        </span>
      </span>
      <span className='p-4 text-emerald-400 sm:text-xs text-base font-medium'>
        Target Total Shards <br />
        <span className='sm:text-xl text-4xl font-extrabold'>
          <AnimatingNumber
            //Returns the shards ONLY for the character whose isTargeted is true
            value={characterArray.reduce((acc, curr) => {
              if (curr.isTargeted) {
                return curr.totalMaterials.totalShards;
              } else return acc;
            }, 0)}
          />
        </span>
      </span>
    </div>
  );
}