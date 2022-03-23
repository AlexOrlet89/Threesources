import { checkError, client } from './client';

export async function fetchFourtet() {
  const response = await client.from('Fourtet Albums').select('*');
  console.log('Fourtet response', checkError(response));
  return checkError(response);
}
