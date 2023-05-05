import axios from 'axios';
// API  - https://api.tvmaze.com/search/shows?q=[PLACE_STRING_FROM_SEARCH_HERE]

const axiosInstance = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  headers: { 'Content-Type': 'application/json' },
});

export const searchMovies = async value => {
  const response = await axiosInstance.get(`search/shows?q=${value}`);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axiosInstance.get(`shows/${movieId}`);
  return response.data;
};
