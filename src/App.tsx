import { Footer, NavBar } from "./components";
import Main from "./pages/Main";

function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white pb-24'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
