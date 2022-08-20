import Divider from "./components/divider";
import Settings from "./components/settings";
import Footer from "./components/footer";
import Goals from "./components/goals";
import Roster from "./components/roster";
import { Character } from "./types/character";
import { createContext } from "react";

const characterArray: Character[] = [];
export const CharacterContext = createContext(characterArray);

export default function App(): JSX.Element {
  return (
    <div className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8'>
      <Settings />
      <Divider />
      <CharacterContext.Provider value={characterArray}>
        <Roster />
        {/* <Divider /> */}
        <Goals />
      </CharacterContext.Provider>
      <Footer />
    </div>
  );
}
