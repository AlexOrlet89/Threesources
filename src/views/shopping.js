import { useEffect, useState } from 'react';
import { fetchShopping } from '../services/fetchfourtet';

export default function Shopping() {
  const [albums, setAlbums] = useState([]);
  console.log('hello'); // works!

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShopping();
      setAlbums(data);
      //   console.log('album data', data);
      console.log('album data');
    };
    fetchData();
  }, []);
  return <div>jazz</div>;
}
