import { useState, createContext } from "react";
import { Character } from "../types/character";

const CharacterContext = createContext({
  characterArray: Array<Character>,
  setCharacterArray: () => {},
});

export const CharacterProvider = ({ children }) => {
  const [characterArray, setCharacterArray] = useState();

  const getCharacters = () => {
    setCharacterArray(characterArray);
    return characterArray;
  };


  return (
    <CharacterContext.Provider
      value={{ characterArray, setCharacterArray, getCharacters }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
