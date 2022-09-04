import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { CharacterContext } from '../App';
import { Character } from '../types/character';

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
    const newArray = characterArray.filter((character) => character.id !== id);
    localStorage.setItem('localCharacters', JSON.stringify(newArray));
    setCharacterArray(newArray);
  };

  const handleDecrease = (id: number) => {
    const newArray = characterArray.map((character) => {
      if (character.id === id) {
        return {
          ...character,
          amount: character.amount - 1,
        };
      }
      return character;
    });
    localStorage.setItem('localCharacters', JSON.stringify(newArray));
    setCharacterArray(newArray);
  };

  //This function will pass in the id of the character to have their amount increased by 1
  const handleIncrease = (id: number) => {
    const newArray = characterArray.map((character) => {
      if (character.id === id) {
        return {
          ...character,
          amount: character.amount + 1,
        };
      }
      return character;
    });
    localStorage.setItem('localCharacters', JSON.stringify(newArray));
    setCharacterArray(newArray);
  };

  const handleTarget = (id: number) => {
    const newArray = characterArray.map((character) => {
      character.isTargeted = false;
      if (character.id === id) {
        return {
          ...character,
          isTargeted: !character.isTargeted,
        };
      }

      return character;
    });
    localStorage.setItem('localCharacters', JSON.stringify(newArray));
    setCharacterArray(newArray);
  };

  return (
    <li
      key={character.id}
      className={`rounded-lg bg-white overflow-hidden ${
        character.isTargeted ? 'bg-green-50 outline outline-green-400' : ''
      }`}
    >
      <div className="flex justify-between lg:justify-around space-x-11 sm:space-x-9">
        <div className="flex items-center sm:space-x-1 border-2 border-slate-700 p-1.5 -m-1.5 sm:-ml-2 rounded-lg lg:relative lg:right-3 ">
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <span
              className={`relative inline-flex items-center p-1 rounded-l-md border border-purple-300  text-xs font-medium text-white focus:z-10  ${
                character.iLevel.number <= 1355
                  ? 'bg-purple-700 border-purple-800 hover:bg-purple-500'
                  : ''
              }
            ${
              character.iLevel.number >= 1445
                ? 'bg-orange-500 border-orange-600 hover:bg-orange-700'
                : ''
            }
            ${
              character.iLevel.number > 1355 && character.iLevel.number < 1445
                ? 'bg-amber-500 border-amber-600 hover:bg-amber-400'
                : ''
            }`}
            >
              {character.iLevel.number}
            </span>
            <span
              className={`-ml-px relative inline-flex items-center p-1 border  bg-white text-xs font-medium text-black  focus:z-10 focus:outline-none ${
                character.rested
                  ? 'bg-green-100 border-green-200 hover:bg-green-50 '
                  : 'bg-red-100 border-red-200 hover:bg-red-50'
              }`}
            >
              {character.rested ? 'Rested' : 'Not Rested'}
            </span>
            <span
              className={`-ml-px relative inline-flex items-center p-1 rounded-r-md text-xs font-medium text-black hover:bg-sky-50 focus:z-10 focus:outline-none bg-sky-100 border border-sky-200`}
            >
              {character.amount}
            </span>
          </span>
        </div>
        <button
          className={`relative right-2 -mt-px inline-block px-1 hover:bg-green-200 text-xs font-medium transition rounded-sm ${
            character.isTargeted
              ? 'text-black'
              : 'text-slate-400 hover:text-slate-600'
          }`}
          onClick={() => handleTarget(character.id)}
        >
          Goal Target
        </button>
      </div>
      <div className="text-black py-1">
        <div>Reds: {character.totalMaterials.totalReds * character.amount}</div>
        <div>
          Blues: {character.totalMaterials.totalBlues * character.amount}
        </div>
        <div>
          {/* Display only the leaps applicable to the target using option chaining */}
          Leaps:{' '}
          {character.isTargeted
            ? character.totalMaterials.chaosLeaps +
              character.totalMaterials.guardianLeaps * character.amount
            : character.totalMaterials.guardianLeaps * character.amount}
        </div>
        <div>
          Shards: {character.totalMaterials.totalShards * character.amount}
        </div>
      </div>
      <div className="-mt-px flex divide-x border-t border-gray-500">
        <button
          onClick={() => handleMinus(character.amount, character.id)}
          className="w-0 flex-1 flex cursor-pointer"
        >
          <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 hover:bg-slate-300">
            <MinusIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
            <span className="ml-3">Remove</span>
          </div>
        </button>
        <button
          onClick={() => handleIncrease(character.id)}
          className="-ml-px w-0 flex-1 flex cursor-pointer"
        >
          <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-600 hover:bg-slate-300">
            <PlusIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
            <span className="ml-3">Add</span>
          </div>
        </button>
      </div>
    </li>
  );
}
