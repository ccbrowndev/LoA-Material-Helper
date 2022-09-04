import { useState } from 'react';
import Help from './help';

export default function Info() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };
  return (
    <div className=' pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <div className='flex absolute my-2 rounded-lg'>
        <button
          className='border px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-600 text-white font-bold'
          onClick={handleClick}
        >
          Help
        </button>
      </div>
      {isShown && <Help isShown={isShown} setIsShown={setIsShown} />}
      <details>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer'>
          App Info
        </summary>
        <p className=' text-lg text-white'>
          This app allows you to enter information about your roster and provide
          ETAs for goals you set.
          <br />
          Please note:
        </p>
        <ul className='list-disc list-inside text-white text-sm'>
          <li>
            These numbers assume you run the{' '}
            <span className='font-bold'>highest guardian raids possible.</span>
          </li>
          <li>
            <span className='text-red-400'>Reds, </span>
            <span className='text-blue-400'>Blues,</span> = Guardian + Chaos
          </li>
          <li>
            <span className='text-emerald-400'>Shards</span> = Targeted Guardian
            + Chaos
          </li>
          <li>
            <span className='text-yellow-400'>Leaps</span> = Guardian. If
            targeted = Guardian + Chaos
          </li>
          <li>
            The app uses local storage for saving settings and custom goals.
          </li>
        </ul>
      </details>
    </div>
  );
}
