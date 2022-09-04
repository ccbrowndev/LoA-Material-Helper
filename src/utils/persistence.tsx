import { Character } from '../types/character';
import { Goal } from '../types/goal';

//Adds a character or goal to existing stored array
//or creates a new array in localStorage if one doesn't exist
export function addToLocalStorage(key: string, value: Character | Goal) {
  const currentStringValue = localStorage.getItem(key);
  const currentObjectValue = JSON.parse(currentStringValue || '');

  try {
    if (currentObjectValue !== '') {
      const newObjectValue = [...currentObjectValue, value];
      const newStringValue = JSON.stringify(newObjectValue);
      localStorage.setItem(key, newStringValue);
    } else {
      const initialArray: Array<Character | Goal> = [value];
      localStorage.setItem(key, JSON.stringify(initialArray));
    }
  } catch (error) {
    console.log('Error! ', error);
  }
}
