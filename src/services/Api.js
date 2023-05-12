import axios from 'axios';

const API_KEY = '9ccdf98ff30ff64d71de726cc0a9e79f';

export const getTrendingMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMoviesById = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const response = await axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`);
  return response.data;
}

export const getMoviesByQuery = async query => {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${query}&page=1`
  );
  return response.data;
}

export const getMovieCast = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const response = await axios.get(
    `${BASE_URL}/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
}

export const getMovieReviews = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;
  const response = await axios.get(
    `${BASE_URL}/${id}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
}
