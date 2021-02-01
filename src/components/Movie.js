import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMovieById from '../actions/movieActions';

const Movie = ({
  dispatch, id, movie, loading, error,
}) => {
  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (movie) {
    return <div>{movie.title}</div>;
  }

  return null;
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  movie: PropTypes.instanceOf(Object),
  dispatch: PropTypes.func.isRequired,
};

Movie.defaultProps = {
  error: null,
  loading: false,
  movie: null,
};

const mapStateToProps = state => ({
  movie: state.movie.item,
  loading: state.movie.loading,
  error: state.movie.error,
});

export default connect(mapStateToProps, null)(Movie);
