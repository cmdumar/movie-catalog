import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from '../testutils';
import Movies from '../components/Movies';

describe('<Movies />', () => {
  test('Renders the connected app with initialState', () => {
    const wrapper = render(<Movies />,
      { initialState: { movies: { items: {}, loading: true, error: null } } });
    const loading = wrapper.container.querySelector('.loading');
    expect(loading).toBeTruthy();
  });
});
