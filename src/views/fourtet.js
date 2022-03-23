import { useEffect, useState } from 'react';
import { fetchFourtet } from '../services/fetchfourtet';

export default function Fourtet() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFourtet();
      setAlbums(data);
      console.log('album data', data);
    };
    fetchData();
  }, []);
  return <div>Fourtet</div>;
}
