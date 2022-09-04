import { Character } from '../types/character';
import { Goal } from '../types/goal';

//Adds a character or goal to existing stored array
//or creates a new array in localStorage if one doesn't exist
export function addToLocalStorage(key: string, value: Character | Goal) {
  const currentStringValue = localStorage.getItem(key);

  //If there is nothing at the provided key, create it
  //Otherwise add to the existing array
  if (!currentStringValue) {
    localStorage.setItem(key, JSON.stringify([value]));
  } else {
    const currentObjectValue = JSON.parse(currentStringValue || 'null');
    if (currentObjectValue) {
      const newObjectValue = [...currentObjectValue, value];
      const newStringValue = JSON.stringify(newObjectValue);
      localStorage.setItem(key, newStringValue);
    }
  }
}
