import Divider from "./components/divider";
import Settings from "./components/settings";
import Footer from "./components/footer";
import ContentGrid from "./components/content-grid";
import Goals from "./components/goals";

export default function App(): JSX.Element {
  return (
    <div className='max-w-5xl mx-auto px-4 pt-2 sm:px-6 lg:px-8'>
      <Settings />
      <Divider />
      <ContentGrid />
      <Divider />
      <Goals />
      <Footer />
    </div>
  );
}
