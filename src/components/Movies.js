import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Movies.module.scss';

const getMovies = state => state.movies;

const Movies = () => {
  const { items: { results }, loading, error } = useSelector(getMovies);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading</div>;
  }

  if (results) {
    return (
      <div className={styles['movies-grid']}>
        {results.map(movie => (
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

export default Movies;
