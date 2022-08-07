export default function Settings(): JSX.Element {
  return (
    <div className='w-1/2 flex flex-col items-center pt-5'>
      <div className=''>
        <details open className='text-2xl text-center text-white'>
          <summary className='text-2xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-4xl'>
            Info & Settings
          </summary>
          <div className='text-sm text-white'>
            <p className=' text-base text-white'>
              This app allows you to enter information about your roster and
              provide ETAs for goals you set.
              <br />
              There are a few important things to note:
            </p>
            <ul className='list-disc list-inside text-white text-sm'>
              <li>
                The app uses local storage for saving settings and custom goals.
              </li>
              <li>
                By default, it is assumed you run the highest guardian raids
                possible.
              </li>
              <li>
                Link at bottom to source code on GitHub. License is GNU GPL v3.0
              </li>
            </ul>
          </div>
          <div className='text-sm text-white'></div>
        </details>
      </div>
    </div>
  );
}
