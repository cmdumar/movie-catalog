import { FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from '../actions/movieActions';

const initialState = {
  item: {},
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.movie,
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        item: {},
      };
    default:
      return state;
  }
};

export default movieReducer;
