import NavBar from './homePage/NavBar.tsx';
//named import
import {Footer} from './homePage/NavBar.tsx';
import './homePage/NavBar.css';

import TheGraph from './homePage/TheGraph.tsx';
import './homePage/TheGraph.css';
export default function App() {
  return (
    <div className='body-wrap'>
      <NavBar />
      <main className='main-content'>
      <TheGraph />
      </main>
      <Footer />
    </div>
  );
}