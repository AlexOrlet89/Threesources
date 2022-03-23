import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/fetchmovies';

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [change, setChange] = useState('');
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log('clicked');
          setSearch(change);
          // console.log(change);
        }}
      >
        <label>
          Name:
          <input type="text" name="name" onChange={(e) => setChange(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {movies.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
}
