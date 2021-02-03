import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';
import Movies from './Movies';
import Filter from './Filter';

const Home = ({
  changePage, page, handleSelect, category, movies,
}) => (
  <>
    <Filter handleSelect={handleSelect} category={category} />
    <Movies />
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

Home.propTypes = {
  movies: PropTypes.instanceOf(Object),
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

Home.defaultProps = {
  movies: null,
};

export default Home;
