import { useEffect, useState } from 'react';
import { fetchShopping } from '../services/fetchshopping';

export default function Shopping() {
  const [shopping, setShopping] = useState([]);
  console.log('hello'); // works!

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShopping();
      setShopping(data);
      //   console.log('album data', data);
      console.log('shopping', shopping);
      console.log('data', data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>A Shopping List </div>
      <div>
        {shopping.map((item) => (
          <p key={item.id}>
            <p>quantity: {item.quantity}</p>
            item: {item.item}
          </p>
        ))}
      </div>
    </div>
  );
}
