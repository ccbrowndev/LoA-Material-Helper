import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useContext, useState } from "react";
import { CharacterContext } from "../App";
import { Character } from "../types/character";
import { Goal } from "../types/goal";
import { goalData, goals } from "../utils/goalData";
import { targetContext } from "../App";

export default function Goals() {
  const defaultGoal: Goal = {
    name: "custom",
    redsRequired: 0,
    bluesRequired: 0,
    leapsRequired: 0,
    shardsRequired: 0,
  };

  const { characterArray, setCharacterArray } = useContext(CharacterContext);
  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const [eta, setEta] = useState(0);
  const { targetCharacter, setTargetCharacter } = useContext(targetContext);

  /* Pseudo-Code
    Find the highest value between dividing goal amount by roster total of each material 
    ETA = Ceiling(theHighestValue)
    */
  const calcETA = (g: Goal, charList: Array<Character>) => {
    //Gets total amount of characters in the roster
    const rosterTotal = charList.reduce((total, character) => {
      return total + character.amount;
    }, 0);
    const reds = g.redsRequired / rosterTotal;
    const blues = g.bluesRequired / rosterTotal;
    const leaps = g.leapsRequired / rosterTotal;
    const shards = g.shardsRequired / rosterTotal;
    const theHighestValue = Math.max(reds, blues, leaps, shards);
    return Math.ceil(theHighestValue);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleGoalSelection = (event: { target: HTMLSelectElement }) => {
    for (const g in goalData) {
      if (g === event.target.value) {
        setGoal(goalData.get(g) || defaultGoal);
      }
    }
    console.log(
      goal.bluesRequired,
      goal.redsRequired,
      goal.leapsRequired,
      goal.shardsRequired
    );
    setEta(calcETA(goal, characterArray));
  };

  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-96 text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Goals
        </summary>
        <Menu as='div' className='relative inline-block text-left'>
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
                <p className='text-sm font-medium text-gray-900 truncate'>{}</p>
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
        </Menu>

        {/* <div>
          <label className=''>
            Select a goal
            <select
              className='text-black'
              value={}
              onChange={handleGoalSelection}
            >
              <option value='goal20wep21'>1340 Weapon +20 to +21</option>
              <option value='goal1340alt1370'>1340 Alt to 1370</option>
              <option value='custom'>Custom goal</option>
            </select>
          </label>
        </div> */}
        <div>{`Selected goal: ${goal.name}`}</div>
      </details>
    </div>
  );
}
