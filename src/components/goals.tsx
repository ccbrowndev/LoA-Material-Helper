import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../App';
import { Character } from '../types/character';
import { Goal } from '../types/goal';
import { goalData } from '../utils/goalData';
import { addToLocalStorage, generateId } from '../utils/persistence';

export default function Goals() {
  const defaultGoal = {
    id: '1340_20wep21',
    name: '1340 Weapon +20 to +21',
    redsRequired: 22716,
    bluesRequired: 0,
    leapsRequired: 595,
    shardsRequired: 85502,
  };

  const { characterArray } = useContext(CharacterContext);
  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const [customGoalState, setCustomGoalState] = useState('initial');
  const [formInputs, setFormInputs] = useState({
    name: '',
    reds: '',
    blues: '',
    leaps: '',
    shards: '',
  });
  const goalMap = goalData;

  const getLocalGoalResult: string = localStorage.getItem('localGoals') || '';
  if (getLocalGoalResult !== '') {
    const localGoals: Goal[] = JSON.parse(getLocalGoalResult);
    localGoals.map((g: Goal) => {
      goalMap.set(g.id, g);
    });
  }

  const handleChange = (event: { target: HTMLInputElement }) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

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

    return { reds: reds, blues: blues, leaps: leaps, shards: shards };
  };

  const handleRemoveMats = () => {
    //The max function is used here to prevent the materials in a goal from going negative.
    const newReds = Math.max(0, goal.redsRequired - parseInt(formInputs.reds));
    const newBlues = Math.max(
      0,
      goal.bluesRequired - parseInt(formInputs.blues)
    );
    const newLeaps = Math.max(
      0,
      goal.leapsRequired - parseInt(formInputs.leaps)
    );
    const newShards = Math.max(
      0,
      goal.shardsRequired - parseInt(formInputs.shards)
    );

    setGoal({
      ...goal,
      redsRequired: newReds,
      bluesRequired: newBlues,
      leapsRequired: newLeaps,
      shardsRequired: newShards,
    });
  };

  //Finds the mat requirement that will take the longest and then returns that with ceiling applied
  const calcETA = (g: Goal) => {
    const rosterMats = getRosterMats(characterArray);
    const redRatio = g.redsRequired / rosterMats.reds;
    const blueRatio = g.bluesRequired / rosterMats.blues;
    const leapRatio = g.leapsRequired / rosterMats.leaps;
    const shardRatio = g.shardsRequired / rosterMats.shards;

    const highestRatio = Math.max(redRatio, blueRatio, leapRatio, shardRatio);
    return Math.ceil(highestRatio);
  };

  const handleGoalSelection = (event: { target: HTMLSelectElement }) => {
    setCustomGoalState('initial');
    setGoal(defaultGoal);
    goalMap.forEach((g) => {
      if (event.target.value === g.id) setGoal(g);
    });
  };

  const handleAddGoal = () => {
    let checkedId = '';
    let checkedName = '';
    if (formInputs.name) {
      checkedId = formInputs.name.replace(/\s/g, '');
      checkedName = formInputs.name;
    } else {
      let customId = 'custom' + generateId();
      checkedId = customId;
      checkedName = customId;
    }

    let customGoal: Goal = {
      id: checkedId,
      name: checkedName,
      redsRequired: parseInt(formInputs.reds),
      bluesRequired: parseInt(formInputs.blues),
      leapsRequired: parseInt(formInputs.leaps),
      shardsRequired: parseInt(formInputs.shards),
      isCustom: true,
    };
    addToLocalStorage('localGoals', customGoal);
    setCustomGoalState('addClicked');
    setGoal(customGoal);
  };

  const handleRemoveGoal = () => {
    goalMap.delete(goal.name);
    const getLocalGoalResult: string = localStorage.getItem('localGoals') || '';
    if (getLocalGoalResult !== '') {
      const localGoals: Goal[] = JSON.parse(getLocalGoalResult);
      const newLocalGoals = localGoals.filter((g) => g.id !== goal.id);
      localStorage.setItem('localGoals', JSON.stringify(newLocalGoals));
    }
    setGoal(defaultGoal);
  };

  //Used to determine button visibility for the goal form
  const getGoalInputVisibility = (inputName: string) => {
    if (inputName === 'addGoal') {
      if (!(goal.name === 'custom' && customGoalState === 'initial'))
        return 'hidden';
    }

    if (inputName === 'removeMats') {
      if (goal.name === 'custom' && customGoalState === 'initial')
        return 'hidden';
    }

    if (inputName === 'removeGoal') {
      if (!goal.isCustom) return 'hidden';
    }

    if (inputName === 'goalName') {
      if (!(goal.name === 'custom' || goal.isCustom)) return 'hidden';
    }
  };

  return (
    <div className="pb-6 sm:px-6 lg:px-8 h-72 text-white text-center">
      <details open>
        <summary className="text-2xl font-bold tracking-tight hover:cursor-pointer pb-4">
          Goals
        </summary>
        {
          <div>
            <label>
              Select a goal
              <select className="text-black" onChange={handleGoalSelection}>
                {
                  //Because a map's forEach method causes issues, it must be converted to an array so the map method can be used
                  [...goalMap].map(([id, g]) => (
                    <option key={id} value={g.id}>
                      {g.name}
                    </option>
                  ))
                }
              </select>
            </label>
          </div>
        }
        <div>{`Goal Reds: ${goal.redsRequired}, Goal Blues ${goal.bluesRequired}, Goal Leaps ${goal.leapsRequired}, Goal Shards ${goal.shardsRequired}`}</div>
        <form
          className={`flex flex-row justify-center items-center py-5 space-x-7 sm:space-x-1`}
        >
          <div
            className={`relative border border-gray-300 rounded-md p-2 shadow-sm ${getGoalInputVisibility(
              'goalName'
            )}`}
          >
            <label
              htmlFor="Name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-slate-800 text-xs font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-1 text-white bg-slate-800 focus:bg-slate-700 placeholder-gray-300 focus:ring-0 sm:text-sm rounded-sm"
              placeholder="Goal name"
              value={formInputs.name || ''}
              onChange={handleChange}
            ></input>
          </div>
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
              value={formInputs.reds || ''}
              onChange={handleChange}
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
              value={formInputs.blues || ''}
              onChange={handleChange}
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
              value={formInputs.leaps || ''}
              onChange={handleChange}
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
              value={formInputs.shards || ''}
              onChange={handleChange}
            ></input>
          </div>
          <div
            className={`border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold ${getGoalInputVisibility(
              'addGoal'
            )}`}
          >
            <label>
              <input
                type="button"
                className="hover:cursor-pointer"
                value="Add goal"
                onClick={handleAddGoal}
              />
            </label>
          </div>
          <div
            className={`border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold ${getGoalInputVisibility(
              'removeMats'
            )}`}
          >
            <label>
              <input
                type="button"
                className="hover:cursor-pointer"
                value="Remove mats"
                onClick={handleRemoveMats}
              />
            </label>
          </div>
          <div
            className={`border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold ${getGoalInputVisibility(
              'removeGoal'
            )}`}
          >
            <label>
              <input
                type="button"
                className="hover:cursor-pointer"
                value="Remove goal"
                onClick={handleRemoveGoal}
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
