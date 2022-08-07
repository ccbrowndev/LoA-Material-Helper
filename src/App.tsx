function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-slate-800'>
      <details open className='text-2xl text-center text-white'>
        <summary>Info and Settings</summary>
        <div className='text-sm text-white'>
          <p>This app allows you to enter information about your roster and provide etas for goals you set.
            There are a few important things to note:
          </p>
          <ul className='list-disc list-inside'>
            <li>The app uses local storage for saving settings and custom goals.</li>
            <li>By default, it is assumed you run the highest guardian raids possible.</li>
            <li>Link at bottom to source code on GitHub. License is GNU GPL v3.0</li>
          </ul>
        </div>
        <div className='text-sm text-white'>

        </div>
      </details>
      <div>
      </div>
    </div>
  )
}

export default App
