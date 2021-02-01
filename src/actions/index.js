const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

const fetchMoviesSccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  payload: { error },
});

export { fetchMoviesBegin, fetchMoviesSccess, fetchMoviesError };
