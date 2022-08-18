import { CharacterForm } from "./characterForm";

export default function () {
  return (
    <div className='pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-4'>
          Add to Roster
        </summary>
        {/* Input row */}
        <CharacterForm />
      </details>
    </div>
  );
}
