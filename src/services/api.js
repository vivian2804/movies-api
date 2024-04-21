import axios from 'axios';

const API_KEY = 'SUA_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get(`/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
