import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {ACTION_POSTERS,NETFLIX_POSTERS} from './urls'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={NETFLIX_POSTERS} title='Netflix Originals' />
      <RowPost url={ACTION_POSTERS} title='Action Movies' isSmall />
    </div>
  );
}

export default App;
