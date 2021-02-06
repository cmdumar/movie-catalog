import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from '../testutils';
import Home from '../components/Home';

describe('<Home />', () => {
  test('Renders the connected app with initialState', () => {
    const wrapper = render(<Home
      changePage={jest.fn()}
      movies={{ total_results: 100 }}
      handleSelect={jest.fn()}
      page={1}
      category="popular"
    />);
    const paginator = wrapper.container.querySelector('.paginator');
    expect(paginator).toBeTruthy();
  });
});
