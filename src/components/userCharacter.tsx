import { Character } from "../types/character";

export default function UserCharacter(character: Character): JSX.Element {
  return (
    <div className=''>
      <div className='flex-1 truncate w-fit border-slate-700 border-2 p-1.5 -m-1.5 rounded-lg'>
        <div className='flex items-center space-x-1'>
          {" "}
          <span
            className={`flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium rounded-full
            ${character.iLevel.number <= 1355 ? "bg-purple-500" : ""}
            ${character.iLevel.number >= 1445 ? "bg-orange-500" : ""}
            ${
              character.iLevel.number > 1355 && character.iLevel.number < 1445
                ? "bg-amber-500 text-white"
                : ""
            }`}
          >
            {character.iLevel.number}
          </span>
          <span
            className={`flex-shrink-0 inline-block px-1.5 py-0.5 text-black text-xs font-medium  ${
              character.rested ? "bg-green-100" : "bg-red-100"
            } rounded-full`}
          >
            {character.rested ? "Rested" : "Not Rested"}
          </span>
          <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-sky-100 rounded-full'>
            {character.amount}
          </span>
        </div>
      </div>
      <div className='text-black py-1'>
        <div>Div go here to make card bigger</div>
        <div>Div go here to make card bigger</div>
        <div>Div go here to make card bigger</div>
        <div>Div go here to make card bigger</div>
      </div>
    </div>
  );
}
