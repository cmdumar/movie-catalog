/* eslint-disable react/prop-types */
const Movies = ({ error, loading, movies }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }
  if (movies) {
    return movies.map(i => (
      <div key={i.title}>{i.title}</div>
    ));
  }

  return <div>Found none</div>;
};

export default Movies;
