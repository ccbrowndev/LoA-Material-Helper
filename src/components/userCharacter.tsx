import { Character } from "../types/character";

export default function UserCharacter(character: Character): JSX.Element {
  return (
    <li>
      <div className='flex flex-row justify-around items-center py-2 border rounded-md bg-slate-600 hover:bg-slate-800'>
        <span>{`${character.id}`}</span>
        <span>{`${character.iLevel.number}`}</span>
        <span>{`${character.amount}`}</span>
        <span>{`${character.rested}`}</span>
        <span>
          <button className='hover:cursor-pointer '>[-]</button>
          <button className='hover:cursor-pointer '>[+]</button>
        </span>
      </div>
    </li>
  );
}
