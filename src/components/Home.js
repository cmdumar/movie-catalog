import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import Movies from './Movies';
import styles from './Home.module.scss';

const Home = ({
  movies, loading, error, changePage, page, handleSelect, category,
}) => (
  <>
    <div className={styles.filter}>
      <h3>Choose Category:</h3>
      <select value={category} onChange={handleSelect}>
        <option value="popular">Popular</option>
        <option value="now_playing">Now Playing</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
    <Movies movies={movies.results} loading={loading} error={error} />
    <div className="paginator">
      <Pagination
        pageSize={20}
        current={page}
        onChange={changePage}
        total={movies.total_results}
      />
    </div>
  </>
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
  handleSelect: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
};

Home.defaultProps = {
  error: null,
  loading: false,
  movies: null,
};

export default connect(mapStateToProps, null)(Home);
