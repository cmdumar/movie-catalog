import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/index';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        items: [],
      };
    default:
      return state;
  }
};

export default moviesReducer;
