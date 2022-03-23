// export async function fetchFourtet() {
//   const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/Shopping`, {
//     headers: {
//       apikey: process.env.REACT_APP_SUPABASE_KEY,
//       Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
//     },
//   });
//   const data = await resp.json();
//   console.log('test fetch');
//   return data;
// }

import { checkError, client } from './client';

export async function fetchShopping() {
  const response = await client.from('Shopping').select('*');
  console.log('response', checkError(response));
  return checkError(response);
}
