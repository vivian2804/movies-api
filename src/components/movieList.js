import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../services/api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title} ({movie.release_date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
