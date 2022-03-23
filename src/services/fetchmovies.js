import { checkError, client } from './client';

export async function fetchMovies(query) {
  const response = await client.from('movies').select('*');
  if (query) {
    const response = await client.from('movies').select('*').ilike('title', `%${query}%`);
    return checkError(response);
  }
  //   console.log('Movies response', checkError(response));
  return checkError(response);
}
