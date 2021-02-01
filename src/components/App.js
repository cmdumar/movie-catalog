import Home from './Home';
import getMovies from '../helpers/getMovies';

function App() {
  console.log('movies', getMovies('popular', 3));
  console.log('latest', getMovies('latest', 3));
  return (
    <Home />
  );
}

export default App;
