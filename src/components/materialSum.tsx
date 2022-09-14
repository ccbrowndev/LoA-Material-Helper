import { useContext } from 'react';
import { CharacterContext } from '../App';
import AnimatingNumber from '../utils/animating-number';
import { getRosterMaterials } from '../utils/rosterUtils';

export default function MaterialSum() {
  const { characterArray } = useContext(CharacterContext);
  const materials = getRosterMaterials(characterArray);

  return (
    <div className="flex justify-between">
      <span className="p-4 text-red-400 sm:text-xs text-base font-medium">
        Total reds <br />
        <span className="sm:text-xl text-4xl font-extrabold transition-transform">
          <AnimatingNumber value={materials.totalReds} />
        </span>
      </span>
      <span className="p-4 text-blue-400 sm:text-xs text-base font-medium">
        Total blues <br />
        <span className="sm:text-xl text-4xl font-extrabold">
          <AnimatingNumber value={materials.totalBlues} />
        </span>
      </span>
      <span className="p-4 text-yellow-400 sm:text-xs text-base font-medium">
        Total Leaps <br />
        <span className="sm:text-xl text-4xl font-extrabold">
          <AnimatingNumber value={materials.totalLeaps} />
        </span>
      </span>
      <span className="p-4 text-emerald-400 sm:text-xs text-base font-medium">
        Target Total Shards <br />
        <span className="sm:text-xl text-4xl font-extrabold">
          <AnimatingNumber value={materials.totalShards} />
        </span>
      </span>
    </div>
  );
}
