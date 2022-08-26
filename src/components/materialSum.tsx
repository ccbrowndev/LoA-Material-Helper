import { useContext } from "react";
import { CharacterContext } from "../App";
import AnimatingNumber from "../utils/animating-number";

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
  );
}