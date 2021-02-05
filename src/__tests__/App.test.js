import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
// import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../testutils';
import App from '../containers/App';

describe('<App />', () => {
  test('Renders the connected app with initialState', () => {
    const app = render(<BrowserRouter><App /></BrowserRouter>);
    // const rendered = [...renderer.create(app).toJSON()];
    expect(app).toBeDefined();
    // expect(rendered).toMatchSnapshot();
  });
});
