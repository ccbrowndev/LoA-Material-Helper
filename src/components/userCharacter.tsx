import { Character } from "../types/character";

export default function UserCharacter(character: Character): JSX.Element {
  return (
    <>
      <span>{`${character.id}`}</span>
      <span>{`${character.iLevel.number}`}</span>
      <span>{`${character.amount}`}</span>
      <span>{`${character.rested}`}</span>
    </>
  );
}
