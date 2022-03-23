import { checkError, client } from './client';

export async function fetchMovies() {
  const response = await client.from('movies').select('*');
  console.log('Movies response', checkError(response));
  return checkError(response);
}
