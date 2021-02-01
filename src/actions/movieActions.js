import getMovieById from '../helpers/getMovieById';

export const FETCH_MOVIE_BEGIN = 'FETCH_MOVIE_BEGIN';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';

const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN,
});

const fetchMovieSuccess = movie => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { movie },
});

const fetchMovieError = error => ({
  type: FETCH_MOVIE_ERROR,
  payload: { error },
});

const fetchMovieById = movieid => dispatch => {
  dispatch(fetchMovieBegin());
  return getMovieById(movieid)
    .then(res => {
      dispatch(fetchMovieSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchMovieError(err)));
};

export default fetchMovieById;
