import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Movie from './Movie';

function App() {
  const movies = useSelector(state => state.movies.items);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      {/* Routes for Movies */}
      {movies.results
        ? (
          <Switch>
            {
            movies.results.map(i => (
              <Route key={i.id} path={`/movie/${i.id}`}>
                <Movie id={i.id} />
              </Route>
            ))
            }
          </Switch>
        ) : null}
    </>
  );
}

export default App;
