import { Character } from "../types/character";

export default function UserCharacter(character: Character): JSX.Element {
  return (
    <div>
      <span>{`${character.iLevel}, ${character.amount}, ${character.rested}`}</span>
    </div>
  );
}
