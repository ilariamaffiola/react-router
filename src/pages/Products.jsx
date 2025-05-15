import React from 'react'
import { NavLink } from 'react-router-dom'
function Products() {
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
    <div>
      prodotti
    </div>
    </>
  )
}

export default Products
