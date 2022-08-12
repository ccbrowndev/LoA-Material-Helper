// Needs work

import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Character } from "../types/character";
import { convertToLevel } from "../utils/levelConverter";

export function CharacterForm(props: { onSubmit: (iLevel: string) => void }) {
  function ihandleSubmit(
    level: number,
    amount: number,
    rested: boolean
  ): Character {
    return {
      iLevel: convertToLevel(level),
      amount: amount,
      rested: rested,
    };
  }

  const [level, setLevel] = useState<number>(1335);
  const [amount, setAmount] = useState<number>(2);
  const [rested, setRested] = useState(true);

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    alert(`iLevel: ${level}, amount: ${amount}, rested: ${rested}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-row justify-around items-center pb-2'
    >
      <div>
        <input
          className='text-black'
          type='text'
          placeholder='Item Level'
          value={level}
        />
      </div>
      <div>
        <input
          type='text'
          className='w-1/2 text-black'
          placeholder='#'
          value={amount}
        />
      </div>
      <div>
        <label>
          Rested?
          <input type='checkbox' className='mx-4' value={rested} />
        </label>
      </div>
      <div>
        <label>
          <input
            type='submit'
            className='inline-block hover:cursor-pointer'
            value='Submit'
          />
        </label>
      </div>
    </form>
    // <form onSubmit={handleSubmit} className='text-amber-500'>
    //   <label>
    //     iLevel:
    //     <input type='text' value={level} />
    //   </label>
    //   <input type='submit' value='Submit' />
    // </form>
  );
}
