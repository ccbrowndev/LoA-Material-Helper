import Divider from "./divider";
import UserCharacter from "./userCharacter";
import { PlusCircleIcon } from "@heroicons/react/solid";

export default function Roster() {
  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Add to Roster
        </summary>
        {/* Input row */}
        <div className='flex flex-row justify-around items-center pb-2'>
          <div>
            <input type='text' placeholder='Item Level' />
          </div>
          <div>
            <input type='text' className='w-1/2' placeholder='#' />
          </div>
          <div>
            <label>
              Rested?
              <input type='checkbox' className='mx-4' />
            </label>
          </div>
          <div>
            <label>
              <div className='inline-block hover:cursor-pointer'>
                <PlusCircleIcon height={30} />
              </div>
              <input type={"button"} />
            </label>
          </div>
        </div>
        {/* User characters */}
        <ul role='list' className='grid grid-row-5 gap-6 pb-5'>
          <li>
            <UserCharacter iLevel={1400} amount={1} rested={true} />
          </li>
          <li>
            <UserCharacter iLevel={1385} amount={3} rested={false} />
          </li>
          <li>
            <UserCharacter iLevel={1370} amount={1} rested={true} />
          </li>
        </ul>
        <Divider />
      </details>
    </div>
  );
}
