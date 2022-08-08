export default function ContentGrid() {
  return (
    <div className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8 text-white text-center'>
      <div className='pb-5'>
        <span className='text-4xl'>Roster</span>
      </div>
      <ul role='list' className='grid grid-cols-5 gap-6'>
        <div>Item Level: INPUT FIELD</div>
        <div>x NUM VALUE</div>
        <div>Rested?</div>
        <div>-</div>
        <div>+</div>
      </ul>
    </div>
  );
}
