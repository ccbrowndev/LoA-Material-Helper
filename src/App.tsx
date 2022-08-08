import Divider from "./components/divider";
import Settings from "./components/latest";

function App(): JSX.Element {
  return (
    <div className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8'>
      <Settings />
      <Divider />
    </div>
  );
}

export default App;
