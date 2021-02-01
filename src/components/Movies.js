import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({ error, loading, movies }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (movies) {
    return movies.map(i => (
      <div key={i.id}>
        <Link to={`/movie/${i.id}`}>{i.title}</Link>
      </div>
    ));
  }

  return <div>Found none</div>;
};

Movies.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  movies: PropTypes.instanceOf(Array),
};

Movies.defaultProps = {
  error: null,
  loading: false,
  movies: null,
};

export default Movies;
