import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/fetchmovies';

export default function Movies() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      setMovie(data);
      console.log('Movie data', data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>Star Wars Movies</div>
      <div>
        {movies.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
}
