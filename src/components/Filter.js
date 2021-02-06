import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ handleSelect, category }) => (
  <div className={styles.filter}>
    <h3>Choose Category:</h3>
    <select value={category} onChange={handleSelect}>
      <option value="popular">Popular</option>
      <option value="now_playing">Now Playing</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  </div>
);

Filter.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Filter;
