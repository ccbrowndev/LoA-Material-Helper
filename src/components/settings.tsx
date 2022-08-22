export default function Settings() {
  return (
    <div className=' pb-6 sm:px-6 lg:px-8 h-auto text-white text-center'>
      <details open>
        <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer'>
          Info & Settings
        </summary>
        <p className=' text-lg text-white'>
          This app allows you to enter information about your roster and provide
          ETAs for goals you set.
          <br />
          Please note:
        </p>
        <ul className='list-disc list-inside text-white text-sm'>
          <li>
            By default, it is assumed you run the highest guardian raids
            possible.
          </li>
          <li>
            The app uses local storage for saving settings and custom goals.
          </li>
        </ul>
      </details>
    </div>
  );
}
