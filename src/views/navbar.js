import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      {' '}
      <NavLink to="/fourtet">fourtet</NavLink>
      <br></br>
      <NavLink to="/shopping">shopping</NavLink>
      <br></br>
      <NavLink to="/movies">movies</NavLink>
      <br></br>
      <NavLink to="/">main</NavLink>
      <br></br>
    </div>
  );
}
