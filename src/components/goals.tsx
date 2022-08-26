import { useContext, useState } from "react";
import { CharacterContext } from "../App";
import { Character } from "../types/character";
import { Goal } from "../types/goal";
import { goalData } from "../utils/goalData";

export default function Goals() {
  const defaultGoal : Goal = {name: 'custom',
  redsRequired: 0,
  bluesRequired: 0,
  leapsRequired: 0,
  shardsRequired: 0,}
  
  const { characterArray, setCharacterArray } = useContext(CharacterContext);
  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const [eta, setEta] = useState();

  const calcETA = (g: Goal, charList : Array<Character>) => {
    /* Pseudo-Code
    Find the highest value between dividing goal amount by roster total of each material 
    ETA = Ceiling(theHighestValue)
    */
  }

  const handleGoalSelection = (event: { target: HTMLSelectElement; }) => {
    for (const g in goalData) {
      if (g === event.target.value) {
        setGoal(goalData.get(g) || defaultGoal);        
      };
    };

    // setEta(calcEta(goal, characterArray))

  };

  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Goals
        </summary>
        <div>
          <label className=''>
            Select a goal
            <select className='text-black' value={goal.name} onChange={handleGoalSelection}>
              {/* Variables:  */}
              <option value='20wep21'>1340 Weapon +20 to +21</option>
              <option value='1340alt1370'>1340 Alt to 1370</option>
              <option value='custom'>Custom goal</option>
            </select>
          </label>
        </div>
      </details>
    </div>
  );
}
