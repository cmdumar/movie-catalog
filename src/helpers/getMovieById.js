import API from '../api';

const key = process.env.REACT_APP_API_KEY;

const getMovieById = async movieid => {
  try {
    const res = await API.get(`/${movieid}?api_key=${key}&language=en-US`);
    return res;
  } catch (err) {
    return err;
  }
};

export default getMovieById;
