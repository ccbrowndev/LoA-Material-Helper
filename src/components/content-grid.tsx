export default function ContentGrid() {
  return (
    <details className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8 text-white text-center'>
      <summary className='text-2xl font-bold tracking-tight hover:cursor-pointer pb-5'>
        Roster
      </summary>
      <ul role='list' className='grid grid-cols-5 gap-6 pb-5'>
        <div>
          <input type='text' placeholder='Item Level' />
        </div>
        <div>
          <input type='text' className='w-12' placeholder='#' />
        </div>
        <div>
          <label>
            Rested?
            <input type='checkbox' className='mx-4' />
          </label>
        </div>
        <div>
          <label className='border'>
            +
            <input type='button' />
          </label>
        </div>
      </ul>
    </details>
  );
}
