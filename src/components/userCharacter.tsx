import { Character } from "../types/character";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { CharacterContext } from "../App";

export default function UserCharacter(character: Character) {
  const { characterArray, setCharacterArray } = useContext(CharacterContext);

  const handleMinus = (amount: number, id: number) => {
    if (amount === 1) {
      handleDelete(id);
    }
    if (amount > 1) {
      handleDecrease(id);
    }
  };
  const handleDelete = (id: number) => {
    setCharacterArray(
      characterArray.filter((character) => character.id !== id)
    );
  };

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
  return (
    <li key={character.id} className='rounded-lg bg-white overflow-hidden'>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-1 border-2 border-slate-700 p-1.5 -m-1.5 rounded-lg'>
          <span
            className={`flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium rounded-full
            ${character.iLevel.number <= 1355 ? "bg-purple-500" : ""}
            ${character.iLevel.number >= 1445 ? "bg-orange-500" : ""}
            ${
              character.iLevel.number > 1355 && character.iLevel.number < 1445
                ? "bg-amber-500 text-white"
                : ""
            }`}
          >
            {character.iLevel.number}
          </span>
          <span
            className={`flex-shrink-0 inline-block px-1.5 py-0.5 text-black text-xs font-medium  ${
              character.rested ? "bg-green-100" : "bg-red-100"
            } rounded-full`}
          >
            {character.rested ? "Rested" : "Not Rested"}
          </span>
          <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-sky-100 rounded-full'>
            {character.amount}
          </span>
        </div>
        <span className="text-slate-400 hover:text-slate-700 active:text-black px-1.5">Goal Target</span>
      </div>
      <div className='text-black py-1'>
        <div>Reds: {character.totalMaterials.totalReds * character.amount}</div>
        <div>
          Blues: {character.totalMaterials.totalBlues * character.amount}
        </div>
        <div>
          Leaps: {character.totalMaterials.totalLeaps * character.amount}
        </div>
        <div>
          Shards: {character.totalMaterials.totalShards * character.amount}
        </div>
      </div>
      <div className='-mt-px flex divide-x border-t border-gray-500'>
        <button
          onClick={() => handleMinus(character.amount, character.id)}
          className='w-0 flex-1 flex cursor-pointer'
        >
          <div className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-slate-300'>
            <MinusIcon className='w-5 h-5 text-gray-600' aria-hidden='true' />
            <span className='ml-3'>Remove</span>
          </div>
        </button>
        <button
          onClick={() => handleIncrease(character.id)}
          className='-ml-px w-0 flex-1 flex cursor-pointer'
        >
          <div className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-600 hover:bg-slate-300'>
            <PlusIcon className='w-5 h-5 text-gray-600' aria-hidden='true' />
            <span className='ml-3'>Add</span>
          </div>
        </button>
      </div>
    </li>
  );
}
