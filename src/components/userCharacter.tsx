import { Character } from "../types/character";

export default function UserCharacter(character: Character): JSX.Element {
  return (
    <li>
      <span>{`${character.iLevel.number}, ${character.amount}, ${character.rested}`}</span>
    </li>
  );
}
