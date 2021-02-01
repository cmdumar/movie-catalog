import getMovies from '../helpers/getMovies';

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  payload: { error },
});

const fetchMovies = (category, page) => dispatch => {
  dispatch(fetchMoviesBegin());
  return getMovies(category, page)
    .then(res => {
      console.log('results', res);
      dispatch(fetchMoviesSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchMoviesError(err)));
};

export default fetchMovies;
