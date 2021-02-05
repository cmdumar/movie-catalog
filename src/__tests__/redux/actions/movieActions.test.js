import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMovieById from '../../../actions/movieActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch Movie Action', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ movie: {} });
  });

  it('when a user clicks/goes to a Movie page', () => {
    store.dispatch(fetchMovieById(12111))
      .then(() => expect(store.getActions()).toContainEqual({ type: 'FETCH_MOVIE_BEGIN' }));
  });
});
