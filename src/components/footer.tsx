export default function Footer() {
  return (
    //This className sets the footer to the bottom of the page.
    <footer className='fixed inset-x-0 bottom-0'>
      <div className='max-w-7xl mx-auto p-1 overflow-hidden sm:px-6 lg:px-8'>
        <p className='text-center text-base text-amber-400 font-mono'>
          <a href='https://github.com/ccbrowndev/LoA-Material-Helper'>
            Github Repository
          </a>
        </p>
      </div>
    </footer>
  );
}
