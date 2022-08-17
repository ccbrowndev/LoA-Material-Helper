import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useRef, useState, useEffect } from "react";
import { Character } from "../types/character";
import { convertToLevel } from "../utils/levelConverter";
import UserCharacter from "./userCharacter";
import autoAnimate from "@formkit/auto-animate";

export function CharacterForm() {
  const [level, setLevel] = useState("");
  const [amount, setAmount] = useState("1");
  const [rested, setRested] = useState(false);
  const [characterArray, setCharacterArray] = useState<Character[]>([]);
  const parent = useRef(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCharacterArray([
      ...characterArray,
      {
        iLevel: convertToLevel(parseInt(level)),
        amount: parseInt(amount),
        rested: rested,
        id: generateId(),
      },
    ]);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleDelete = (id: number) => {
    setCharacterArray(
      characterArray.filter((character) => character.id !== id)
    );
  };

  const handleMinus = (amount: number, id: number) => {
    if (amount === 1) {handleDelete(id)}
    if (amount > 1) {handleDecrease(id)}
  }

  const handleDecrease = (id: number) => {
    setCharacterArray(
      characterArray.map((character) => {
        if (character.id === id) {
          return {
            ...character,
            amount: character.amount - 1,
          };
        }
        return character;
      })
    );
  };

  //This function will pass in the character array and the id of the character to have their amount increased by 1
  const handleIncrease = (id: number) => {
    setCharacterArray(
      characterArray.map((character) => {
        if (character.id === id) {
          return {
            ...character,
            amount: character.amount + 1,
          };
        }
        return character;
      })
    );
  };

  //This function will generate a unique random id for each character.
  const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div>
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
      <ul
        ref={parent}
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {characterArray.map((character: Character) => (
          <li
            key={character.id}
            className=' bg-white rounded-lg shadow divide-y divide-gray-200 overflow-hidden'
          >
            <UserCharacter
              id={character.id}
              iLevel={character.iLevel}
              amount={character.amount ? character.amount : 1}
              rested={character.rested}
            />
            <div className='-mt-px flex divide-x divide-gray-300'>
              <button
                onClick={() => handleMinus(character.amount, character.id)}
                className='w-0 flex-1 flex cursor-pointer'
              >
                <div className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-slate-300'>
                  <MinusIcon
                    className='w-5 h-5 text-gray-600'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Remove</span>
                </div>
              </button>
              <button
                onClick={() => handleIncrease(character.id)}
                className='-ml-px w-0 flex-1 flex cursor-pointer'
              >
                <div className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-600 hover:bg-slate-300'>
                  <PlusIcon
                    className='w-5 h-5 text-gray-600'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Add</span>
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
