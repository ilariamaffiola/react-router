import React from 'react'
import { NavLink } from 'react-router-dom'
function MainNavbar() {
  return (
    <header>
        <nav>
          <ul>
              <li>
                <NavLink to="/"><a href="">HomePage</a></NavLink>
              </li>
              <li>
                <NavLink to="/who"><a  className="" href="">Who we are</a></NavLink>
              </li>
              <li>
                <NavLink to="/products"><a href="">Products</a></NavLink>
              </li>
          </ul>
        </nav>
    </header>
  )
}

export default MainNavbar
