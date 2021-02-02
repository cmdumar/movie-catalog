import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import fetchMoviesByCategory from '../actions/index';
import Home from './Home';
import Movie from './Movie';

const App = ({
  dispatch, movies, loading, error,
}) => {
  const [page, setPage] = useState(1);
  const moviesById = useSelector(state => state.movies.items);

  useEffect(() => {
    dispatch(fetchMoviesByCategory('popular', page));
  }, [page]);

  const changePage = e => {
    setPage(e);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home
            movies={movies}
            loading={loading}
            error={error}
            changePage={changePage}
            page={page}
          />
        </Route>
      </Switch>

      {/* Routes for Movies */}
      {moviesById.results
        ? (
          <Switch>
            {
            moviesById.results.map(i => (
              <Route key={i.id} path={`/movie/${i.id}`}>
                <Movie id={i.id} />
              </Route>
            ))
            }
          </Switch>
        ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

App.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  movies: PropTypes.instanceOf(Object),
  dispatch: PropTypes.func.isRequired,
};

App.defaultProps = {
  error: null,
  loading: false,
  movies: null,
};

export default connect(mapStateToProps)(App);
