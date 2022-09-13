import { useRef, useState, useEffect, useContext } from 'react';
import { Character } from '../types/character';
import { convertToLevel } from '../utils/levelConverter';
import UserCharacter from './userCharacter';
import autoAnimate from '@formkit/auto-animate';
import { CharacterContext } from '../App';
import { materialData } from '../utils/materialData';
import { addToLocalStorage } from '../utils/persistence';

export const CharacterForm = () => {
  const { characterArray, setCharacterArray } = useContext(CharacterContext);

  const [userInput, setUserInput] = useState({
    level: '',
    amount: '1',
    rested: false,
  });

  const parent = useRef(null);

  function getMaterials(charLevel: number) {
    const materials = materialData.get(charLevel) || {
      chaosReds: 0,
      chaosBlues: 0,
      chaosLeaps: 0,
      shards: 0,
      guardianReds: 0,
      guardianBlues: 0,
      guardianLeaps: 0,
    };

    const reds = materials.chaosReds + materials.guardianReds;
    const blues = materials.chaosBlues + materials.guardianBlues;
    const chaosLeaps = materials.chaosLeaps;
    const guardianLeaps = materials.guardianLeaps;
    const shards = materials.shards;

    return {
      reds: reds,
      blues: blues,
      chaosLeaps: chaosLeaps,
      guardianLeaps: guardianLeaps,
      shards: shards,
    };
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const parsedLevel = convertToLevel(parseInt(userInput.level));
    const cid = generateId();
    const mats = getMaterials(parsedLevel.number);
    const charToBeAdded: Character = {
      id: cid,
      // name: '',
      iLevel: parsedLevel,
      amount: parseInt(userInput.amount),
      rested: userInput.rested,
      isTargeted: characterArray.length === 0 ? true : false,
      //Characters operating on rested bonus earn 2/3rds the mats, floor function applied to keep display whole numbers
      totalMaterials: userInput.rested
        ? {
            totalReds: Math.floor(mats.reds * (2 / 3)),
            totalBlues: Math.floor(mats.blues * (2 / 3)),
            guardianLeaps: Math.floor(mats.guardianLeaps * (2 / 3)),
            chaosLeaps: Math.floor(mats.chaosLeaps * (2 / 3)),
            totalShards: Math.floor(mats.shards * (2 / 3)),
          }
        : {
            totalReds: mats.reds,
            totalBlues: mats.blues,
            guardianLeaps: mats.guardianLeaps,
            chaosLeaps: mats.chaosLeaps,
            totalShards: mats.shards,
          },
    };
    addToLocalStorage('localCharacters', charToBeAdded);
    setCharacterArray([...characterArray, charToBeAdded]);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //This function will generate a unique random id for each character.
  const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-row justify-center items-center pb-5 space-x-7 sm:space-x-1'
      >
        <div className='relative border border-gray-300 rounded-md p-2 shadow-sm'>
          <label
            htmlFor='Level'
            className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium'
          >
            iLevel
          </label>
          <input
            type='text'
            name='level'
            id='level'
            className='block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm'
            placeholder='1325+'
            value={userInput.level}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                level: e.target.value.replace(/[^\d.]/g, ''),
              })
            }
          />
        </div>
        <div className='relative border border-gray-300 rounded-md p-2 shadow-sm'>
          <label
            htmlFor='name'
            className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium'
          >
            Amount
          </label>
          <input
            type='text'
            name='amount'
            id='amount'
            className='block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm'
            placeholder='#'
            value={userInput.amount}
            onChange={(e) =>
              setUserInput({
                ...userInput,
                amount: e.target.value.replace(/\D/g, ''),
              })
            }
          />
        </div>
        <div className='p-1'>
          <label>
            Rested?
            <input
              className='ml-1'
              type='checkbox'
              about='Rested'
              onChange={(e) =>
                setUserInput({ ...userInput, rested: e.target.checked })
              }
            />
          </label>
        </div>
        <div className='border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold'>
          <label>
            <input
              type='submit'
              className='hover:cursor-pointer'
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
          <UserCharacter
            key={character.id}
            id={character.id}
            name={character.name}
            iLevel={character.iLevel}
            amount={character.amount ? character.amount : 1}
            rested={character.rested}
            totalMaterials={character.totalMaterials}
            isTargeted={character.isTargeted}
          />
        ))}
      </ul>
    </div>
  );
};
