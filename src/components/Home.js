/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import fetchMovies from '../actions/index';
import Movies from './Movies';

const Home = ({
  dispatch, movies, loading, error,
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies('popular', page));
  }, [page]);

  const changePage = e => {
    setPage(e);
  };

  return (
    <div>
      <Movies movies={movies.results} loading={loading} error={error} />
      <Pagination pageSize={20} current={page} onChange={changePage} total={movies.total_results} />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps, null)(Home);
