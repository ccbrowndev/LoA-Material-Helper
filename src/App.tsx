import Divider from "./components/divider";
import Hello from "./components/hello";
import Settings from "./components/settings";
import Test from "./components/testing";

function App(): JSX.Element {
  return (
    <div className=''>
      <Test />
      <Divider />
    </div>
  );
}

export default App;
