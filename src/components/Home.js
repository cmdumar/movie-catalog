import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import Movies from './Movies';

const Home = ({
  movies, loading, error, changePage, page,
}) => (
  <div>
    <Movies movies={movies.results} loading={loading} error={error} />
    <Pagination pageSize={20} current={page} onChange={changePage} total={movies.total_results} />
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

Home.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  movies: PropTypes.instanceOf(Object),
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

Home.defaultProps = {
  error: null,
  loading: false,
  movies: null,
};

export default connect(mapStateToProps, null)(Home);
