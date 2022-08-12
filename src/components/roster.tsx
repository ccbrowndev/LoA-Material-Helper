import Divider from "./divider";
import UserCharacter from "./userCharacter";
import { FingerPrintIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Character, Level } from "../types/character";
import { CharacterForm } from "./characterForm";

export default function Roster() {
  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Add to Roster
        </summary>
        {/* Input row */}
        <CharacterForm />

        {/* User characters */}
        <ul role='list' className='grid grid-row-5 gap-6 pb-5'>
          <li>
            <UserCharacter iLevel={{ number: 1355 }} amount={1} rested={true} />
          </li>
          <li>
            <UserCharacter
              iLevel={{ number: 1355 }}
              amount={3}
              rested={false}
            />
          </li>
          <li>
            <UserCharacter iLevel={{ number: 1355 }} amount={1} rested={true} />
          </li>
        </ul>
      </details>
    </div>
  );
}
