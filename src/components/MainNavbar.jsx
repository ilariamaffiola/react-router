import { NavLink } from 'react-router-dom'
function MainNavbar() {

  const links = [
    { path: '/',
      label: 'HomePage'
    },
    {
      path: '/who',
      label: 'Who we are'
    },
    {
      path: '/products',
      label: 'Products'
    }
    ]
  return (
    <header>
        <nav>
          <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
    </header>
  )
}

export default MainNavbar
