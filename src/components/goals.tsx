import { useContext, useState } from 'react';
import { CharacterContext } from '../App';
import { Character } from '../types/character';
import { Goal } from '../types/goal';
import { goalData } from '../utils/goalData';

export default function Goals() {
  const defaultGoal: Goal = {
    name: 'custom',
    redsRequired: 0,
    bluesRequired: 0,
    leapsRequired: 0,
    shardsRequired: 0,
  };

  const { characterArray } = useContext(CharacterContext);
  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const [ customGoalState, setCustomGoalState ] = useState('initial')

  const getRosterMats = (charList: Array<Character>) => {
    let reds = 0;
    let blues = 0;
    let leaps = 0;
    let shards = 0;

    // the leaps returned need to be only guardian leapstones except for the targetted character. The shards should be 0 unless it's the targeted character.
    charList.forEach((character) => {
      reds += character.totalMaterials.totalReds;
      blues += character.totalMaterials.totalBlues;
      leaps += character.totalMaterials.guardianLeaps;
      if (character.isTargeted) {
        shards += character.totalMaterials.totalShards;
        leaps += character.totalMaterials.chaosLeaps;
      }
    });

    return {reds: reds, blues: blues, leaps: leaps, shards: shards};
  };

  //Finds the mat requirement that will take the longest and then returns that with ceiling applied
  const calcETA = (g: Goal) => {
    const rosterMats = getRosterMats(characterArray);
    const redRatio = g.redsRequired / rosterMats.reds
    const blueRatio = g.bluesRequired / rosterMats.blues;
    const leapRatio = g.leapsRequired / rosterMats.leaps;
    const shardRatio = g.shardsRequired / rosterMats.shards;

    const highestRatio = Math.max(redRatio, blueRatio, leapRatio, shardRatio);
    return Math.ceil(highestRatio);
  };

  const handleGoalSelection = (event: { target: HTMLSelectElement }) => {
    setGoal(defaultGoal);
    goalData.forEach((value, key) => {
      if (key === event.target.value) setGoal(value);
    });
  };

  //Used to determine button visibility for the goal form
  const  getGoalButtonVisibility = (buttonName: string) => {
    if (goal.name === 'custom') {
      if ((customGoalState === 'initial' && buttonName === 'remove') || (customGoalState === 'addClicked' && buttonName === 'add')) {
        return 'hidden'
      } else return ''
    }
    if (buttonName === 'add') return 'hidden'
    return ''
  }

  return (
    <div className="pb-6 sm:px-6 lg:px-8 h-96 text-white text-center">
      <details open>
        <summary className="text-2xl font-bold tracking-tight hover:cursor-pointer pb-4">
          Goals
        </summary>
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
          <div className={`border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold ${getGoalButtonVisibility('add')}`}>
            <label>
              <input
                type='button'
                className='hover:cursor-pointer'
                value='Add custom goal'
              />
            </label>
          </div>
          <div className={`border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold ${getGoalButtonVisibility('remove')}`}>
            <label>
              <input
                type='button'
                className='hover:cursor-pointer'
                value='Remove owned materials'
              />
            </label>
          </div>
        </form>
        <p>{`It will take an estimated ${calcETA(
          goal
        )} days to complete this goal`}</p>
      </details>
    </div>
  );
}
