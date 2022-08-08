export default function ContentGrid() {
  return (
    <details className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8 text-white text-center'>
      <summary className='text-4xl pb-5'>Roster</summary>
      <ul role='list' className='grid grid-cols-5 gap-6'>
        <div>Item Level: INPUT FIELD</div>
        <div>x NUM VALUE</div>
        <div>Rested?</div>
        <div>Toggle for Rested</div>
        <div>Add character</div>
      </ul>
    </details>
  );
}
