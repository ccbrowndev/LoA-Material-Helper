export default function Hello() {
  return (
    <>
      <div className=' mx-auto px-4 pb-6 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20'>
          <details
            open
            className='py-0 px-0 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between text-white'
          >
            <summary className='text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Info & Settings
            </summary>
            <div className='max-w-2xl justify-center'>
              <p className='mt-5 text-xl text-white'>
                This app allows you to enter information about your roster and
                provide etas for goals you set. There are a few important things
                to note:
              </p>
              <ul className='list-disc list-inside text-white'>
                <li>
                  The app uses local storage for saving settings and custom
                  goals.
                </li>
                <li>
                  By default, it is assumed you run the highest guardian raids
                  possible.
                </li>
                <li>
                  Link at bottom to source code on GitHub. License is GNU GPL
                  v3.0
                </li>
              </ul>
            </div>
          </details>
          <div className='mt-10 w-full max-w-xs'>
            <label
              htmlFor='currency'
              className='block text-base font-medium text-gray-300'
            >
              Settings
            </label>
            <div className='mt-1.5 relative'>
              <select
                id='currency'
                name='currency'
                className='appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm'
                defaultValue='United States (USD)'
              >
                <option>Argentina (ARS)</option>
                <option>Australia (AUD)</option>
                <option>United States (USD)</option>
                <option>Canada (CAD)</option>
                <option>France (EUR)</option>
                <option>Japan (JPY)</option>
                <option>Nigeria (NGN)</option>
                <option>Switzerland (CHF)</option>
                <option>United Kingdom (GBP)</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
