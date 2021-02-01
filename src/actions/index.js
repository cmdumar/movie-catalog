import getMoviesByCategory from '../helpers/getMoviesByCategory';

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

const fetchMoviesByCategory = (category, page) => dispatch => {
  dispatch(fetchMoviesBegin());
  return getMoviesByCategory(category, page)
    .then(res => {
      dispatch(fetchMoviesSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchMoviesError(err)));
};

export default fetchMoviesByCategory;
