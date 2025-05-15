import React from 'react';
import { NavLink } from 'react-router-dom';
function Homepage() {
  return (
    <>
      <header>
        <nav>
          <ul>
              <li>
                <NavLink to="/">HomePage</NavLink>
              </li>
              <li>
                <NavLink to="/who">Who we are</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
          </ul>
        </nav>
      </header>
      <h1>HomePage</h1>
    </>
  );
}

export default Homepage;
