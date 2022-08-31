import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment, useContext, useState } from 'react';
import { CharacterContext } from '../App';
import { Character } from '../types/character';
import { Goal } from '../types/goal';
import { goalData, goals } from '../utils/goalData';
import { targetContext } from '../App';
import { materialData } from '../utils/materialData';

export default function Goals() {
  const defaultGoal: Goal = {
    name: 'custom',
    redsRequired: 0,
    bluesRequired: 0,
    leapsRequired: 0,
    shardsRequired: 0,
  };

  const { characterArray, setCharacterArray } = useContext(CharacterContext);
  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const { targetCharacter, setTargetCharacter } = useContext(targetContext);

  const getRosterMats = (charList: Array<Character>) => {
    let reds = 0;
    let blues = 0;
    let leaps = 0;
    let shards = 0;

    charList.forEach((character) => {
      reds += character.totalMaterials.totalReds;
      blues += character.totalMaterials.totalBlues;
      leaps += materialData.get(character.iLevel.number)?.guardianLeaps || 0;
      if (character.isTargeted) {
        shards += character.totalMaterials.totalShards;
        leaps += materialData.get(character.iLevel.number)?.chaosLeaps || 0;
      }
    });

    return [reds, blues, leaps, shards];
  };

  /* Pseudo-Code
    Find the highest value between dividing goal amount by roster total of each material 
    ETA = Ceiling(theHighestValue)
    */
  const calcETA = (g: Goal) => {
    const rosterMats = getRosterMats(characterArray);
    const redRatio = g.redsRequired / rosterMats[0];
    const blueRatio = g.bluesRequired / rosterMats[1];
    const leapRatio = g.leapsRequired / rosterMats[2];
    const shardRatio = g.shardsRequired / rosterMats[3];

    const highestRatio = Math.max(redRatio, blueRatio, leapRatio, shardRatio);
    return Math.ceil(highestRatio);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleGoalSelection = (event: { target: HTMLSelectElement }) => {
    setGoal(defaultGoal);
    goalData.forEach((value, key) => {
      if (key === event.target.value) setGoal(value);
    });
  };

  return (
    <div className="pb-6 sm:px-6 lg:px-8 h-96 text-white text-center">
      <details open>
        <summary className="text-2xl font-bold tracking-tight hover:cursor-pointer pb-4">
          Goals
        </summary>
        {/* <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex justify-center w-full rounded-md border border-slate-400 shadow-sm px-4 py-2 bg-white text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-500 focus:ring-slate-700'>
              Character selected:{" "}
              <span className='pl-1 text-slate-800 font-bold'>{`${targetCharacter.iLevel.number}`}</span>
              <ChevronDownIcon
                className='-mr-1 ml-2 h-5 w-5'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              onSelect={() => handleGoalSelection}
              className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'
            >
              <div className='px-4 py-3'>
                <p className='text-sm text-black'>
                  Signed in as <span>{`${targetCharacter.iLevel.number}`}</span>
                </p>
                <p className='text-sm font-medium text-gray-900 truncate'>{ }</p>
              </div>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Goal goes here
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Goal goes here
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Goal goes here
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}

        {
          <div>
            <label className="">
              Select a goal
              <select
                className="text-black"
                defaultValue={'custom'}
                onChange={handleGoalSelection}
              >
                <option value="20wep21">1340 Weapon +20 to +21</option>
                <option value="1340alt1370">1340 Alt to 1370</option>
                <option value="custom">Custom goal</option>
              </select>
            </label>
          </div>
        }
        <div>{`Goal Reds: ${goal.redsRequired}, Goal Blues ${goal.bluesRequired}, Goal Leaps ${goal.leapsRequired}, Goal Shards ${goal.shardsRequired}`}</div>
        <form
          className={`flex flex-row justify-center items-center py-5 space-x-7 sm:space-x-1`}
        >
          <div className="relative border border-gray-300 rounded-md p-2 shadow-sm">
            <label
              htmlFor="Reds"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium"
            >
              Reds
            </label>
            <input
              type="text"
              name="reds"
              id="reds"
              className="block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm"
              placeholder="Number of Reds"
            ></input>
          </div>
          <div className="relative border border-gray-300 rounded-md p-2 shadow-sm">
            <label
              htmlFor="Blues"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium"
            >
              Blues
            </label>
            <input
              type="text"
              name="blues"
              id="blues"
              className="block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm"
              placeholder="Number of Blues"
            ></input>
          </div>
          <div className="relative border border-gray-300 rounded-md p-2 shadow-sm">
            <label
              htmlFor="Leaps"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium"
            >
              Leaps
            </label>
            <input
              type="text"
              name="leaps"
              id="leaps"
              className="block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm"
              placeholder="Number of Leapstones"
            ></input>
          </div>
          <div className="relative border border-gray-300 rounded-md p-2 shadow-sm">
            <label
              htmlFor="Shards"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium"
            >
              Shards
            </label>
            <input
              type="text"
              name="shards"
              id="shards"
              className="block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm"
              placeholder="Number of Shards"
            ></input>
          </div>
        </form>
        <p>{`It will take an estimated ${calcETA(
          goal
        )} days to complete this goal`}</p>
      </details>
    </div>
  );
}
