import React, { useState } from 'react';

export default function SearchForm({ setSearch }) {
  const [change, setChange] = useState('');
  return (
    <div>
      {' '}
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
    </div>
  );
}
