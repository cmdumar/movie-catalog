import API from '../api';

const key = process.env.REACT_APP_API_KEY;
const getMovies = async (category, page) => {
  try {
    const res = await API.get(`/${category}?api_key=${key}&language=en-US&page=${page}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default getMovies;
