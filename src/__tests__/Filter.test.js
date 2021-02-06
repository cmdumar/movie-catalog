import renderer from 'react-test-renderer';
import Filter from '../components/Filter';

test('Render Filter Component', () => {
  const f = renderer.create(<Filter handleSelect={() => 'something'} category="popular" />).toJSON();
  expect(f).toMatchSnapshot();
});
