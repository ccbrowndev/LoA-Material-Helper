import Divider from "./components/divider";
import Settings from "./components/settings";
import Footer from "./components/footer";
import Goals from "./components/goals";
import Roster from "./components/roster";
import { Character } from "./types/character";
import { createContext, useState } from "react";

export const CharacterContext = createContext({
  characterArray: Array<Character>(),
  setCharacterArray: (characterArray: Character[]) => {},
});

export default function App(): JSX.Element {
  const [characterArray, setCharacterArray] = useState<Character[]>([]);
  return (
    <div className='max-w-5xl mx-auto px-4 pt-2 sm:px-2 lg:px-8'>
      <Settings />
      <Divider />
      <CharacterContext.Provider value={{ characterArray, setCharacterArray }}>
          <Roster />
          <Divider />
          <Goals />
      </CharacterContext.Provider>
      <Footer />
    </div>
  );
}
