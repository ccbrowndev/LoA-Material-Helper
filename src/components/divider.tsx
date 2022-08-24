export default function Divider() {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full mx-auto border-t border-gray-300 o' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-white px-2 text-gray-500'></span>
      </div>
    </div>
  );
}
