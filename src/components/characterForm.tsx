import { useState } from "react";
import { Character } from "../types/character";
import { convertToLevel } from "../utils/levelConverter";
import UserCharacter from "./userCharacter";

export function CharacterForm() {
  const [level, setLevel] = useState("");
  const [amount, setAmount] = useState("");
  const [rested, setRested] = useState(false);
  const [characterArray, setCharacterArray] = useState<Character[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCharacterArray([
      ...characterArray,
      {
        iLevel: convertToLevel(parseInt(level)),
        amount: parseInt(amount),
        rested: rested,
        id: characterArray.length,
      },
    ]);
  };

  const handleRemove = (id: number) => {
    setCharacterArray(
      characterArray.filter((character) => character.id !== id)
    );
  };
  return (
    <>
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
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            className='w-1/2 text-black'
            placeholder='#'
            value={amount}
            onChange={(e) => {
              const result = e.target.value.replace(/\D/g, "");
              setAmount(result);
            }}
          />
        </div>
        <div>
          <label>
            Rested?
            <input
              type='checkbox'
              className='mx-4'
              about='Rested'
              onChange={(e) => setRested(e.target.checked)}
            />
          </label>
        </div>
        <div className='border px-3 py-1 rounded-xl bg-slate-600 hover:bg-slate-800 text-white font-bold'>
          <label>
            <input
              type='submit'
              className='inline-block hover:cursor-pointer'
              value='Submit'
            />
          </label>
        </div>
      </form>
      <ul role='list' className='grid grid-row-5 gap-2 pb-5'>
        {characterArray.map((character: Character) => (
          <UserCharacter
            //TODO: add some key value in type definition
            key={character.id}
            id={character.id}
            iLevel={character.iLevel}
            amount={character.amount ? character.amount : 1}
            rested={character.rested}
          />
        ))}
      </ul>
    </>
  );
}
