import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { BrowserRouter } from 'react-router-dom';
import { render } from '../testutils';
import Movie from '../containers/App';

describe('<Movie />', () => {
  test('Renders the connected app with initialState', () => {
    const movie = render(<BrowserRouter><Movie /></BrowserRouter>);
    expect(movie).toBeDefined();
  });
});
