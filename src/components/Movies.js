import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movies.module.scss';

const Movies = ({ error, loading, movies }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (movies) {
    return (
      <div className={styles.movie_grid}>
        {movies.map(movie => (
          <div
            className={`${styles['movie-item']} ${styles['infos-container']}`}
            key={movie.id}
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : null}
                alt="Movie Poster"
              />
              <div className={styles['infos-box']}>
                <div className={styles['infos-one']}>{movie.release_date}</div>
                <div className={styles['infos-two']}>{movie.original_title}</div>
                <div className={styles['infos-three']}>{movie.vote_average}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
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
