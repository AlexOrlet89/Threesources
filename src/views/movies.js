import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { fetchMovies } from '../services/fetchmovies';

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(`${search}`);
      setMovie(data);
      // console.log('Movie data', data);
    };
    fetchData();
  }, [search]);
  return (
    <div>
      <div>Star Wars Movies</div>
      <SearchForm setSearch={setSearch} />
      <div>
        {movies.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
}
