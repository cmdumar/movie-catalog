import movieReducer from '../../reducers/movieReducer';

const initialState = {
    item: {},
    loading: false,
    error: null,
};

test('Returns loading as true when the FETCH_MOVIE_BEGIN type is passed', () => {
    const movie = movieReducer(initialState, {type: 'FETCH_MOVIE_BEGIN'});

    expect(movie.loading).toBe(true);
});


test('Returns the default state when no/incorrect action is passed', () => {
    const movie = movieReducer(initialState, {type: 'something'});

    expect(movie.loading).toBeFalsy();
    expect(movie.item).toStrictEqual({});
    expect(movie.error).toBeNull();
});