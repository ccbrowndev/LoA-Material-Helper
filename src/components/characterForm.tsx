// Needs work

import { useState } from "react";

export function CharacterForm(props: { onSubmit: (iLevel: string) => void }) {
  const [iLevel, setiLevel] = useState("");

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    alert(`Submitting iLevel: ${iLevel}`);
  };
  return (
    <form onSubmit={handleSubmit} className='text-amber-500'>
      <label>
        iLevel:
        <input
          type='text'
          value={iLevel}
          onChange={(e) => setiLevel(e.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
