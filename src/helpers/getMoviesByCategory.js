import API from '../api';

const key = process.env.REACT_APP_API_KEY;

const getMoviesByCategory = async (category = 'popular', page = 1) => {
  try {
    const res = await API.get(`/${category}?api_key=${key}&language=en-US&page=${page}`);
    return res;
  } catch (err) {
    return err;
  }
};

export default getMoviesByCategory;
