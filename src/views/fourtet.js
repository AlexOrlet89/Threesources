import { useEffect, useState } from 'react';
import { fetchFourtet } from '../services/fetchfourtet';

export default function Fourtet() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFourtet();
      setAlbums(data);
      //   console.log('album data', data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>Fourtet</div>
      <div>
        {albums.map((album) => (
          <h2 key={album.id}>{album.AlbumName}</h2>
        ))}
      </div>
    </div>
  );
}
