import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMovieById from '../actions/movieActions';
import styles from './Movie.module.scss';

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
    return (
      <div className="relative">
        <div className={styles['movie-grid']}>
          <div className={styles['movie-poster']}>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : null}
              alt="Movie poster"
            />
          </div>
          <div className={styles['infos-grid']}>
            <div className={`${styles['movie-title']} relative`}>
              {movie.title}
            </div>
            <div className={styles['movie-infos']}>
              <span className={styles['movie-date']}>{movie.release_date}</span>
              <span className={styles['movie-vote']}>{movie.vote_average}</span>
              <span className={styles['movie-runtime']}>
                {Math.floor(movie.runtime / 60)}
                h
                {movie.runtime % 60}
                m
              </span>
            </div>
            <div className={styles['movie-genres']}>
              {movie.genres ? movie.genres.map(({ id, name }, i) => (
                <span key={id}>
                  {i !== movie.genres.length - 1 ? `${name}, `
                    : ` ${name}`}
                </span>
              )) : null}
            </div>
            <div className={styles['movie-tagline']}>
              {movie.tagline
                ? movie.tagline : null}
            </div>

            <div className={styles['movie-overview']}>{movie.overview}</div>
            {/* <div className="movie-director">
              <span className="director-job">Director</span>
              <span className="director-name">{direcName}</span>
            </div> */}
            {/* <div>
              <span className="main-cast">Main Cast</span>
              {loaded ? credits.cast.map((cast, i) => ((i < 11)
                ? (
                  <span key={cast.cast_id}>
                    {i !== 10 ? `${cast.name}, `
                      : `${cast.name}`}
                  </span>
                ) : null)) : null}
            </div> */}
          </div>
        </div>
      </div>
    );
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
