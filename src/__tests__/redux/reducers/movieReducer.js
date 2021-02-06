import movieReducer from '../../../reducers/movieReducer';
import { FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../../../actions/movieActions';

const initialState = {
  item: {},
  loading: false,
  error: null,
};

test('Returns loading as true when the FETCH_MOVIE_BEGIN type is passed', () => {
  const movie = movieReducer(initialState, { type: FETCH_MOVIE_BEGIN });

  expect(movie.loading).toBe(true);
});

test('Returns the default state when no/incorrect action is passed', () => {
  const movie = movieReducer(undefined, {});

  expect(movie.loading).toBeFalsy();
  expect(movie.item).toStrictEqual({});
  expect(movie.error).toBeNull();
});

test('Returns the updated state with movie details when success action is passed', () => {
  const movie = {
    title: 'Wonder Woman',
  };
  const fn = movieReducer(initialState, { type: FETCH_MOVIE_SUCCESS, payload: { movie } });

  expect(fn.loading).toBe(false);
  expect(fn.item).toStrictEqual(movie);
  expect(fn.error).toBeNull();
});

test('Returns the updated state with error message when error action is passed', () => {
  const error = 'Sorry movie not found!';
  const fn = movieReducer(initialState, { type: FETCH_MOVIE_ERROR, payload: { error } });

  expect(fn.loading).toBe(false);
  expect(fn.item).toStrictEqual({});
  expect(fn.error).toBe(error);
});
