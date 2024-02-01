import axios from 'axios';
const API_KEY = 'd393339f8c84c0e0197b2010530b6601';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendyMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchSearchedMovies = async search => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1`
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
