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
      {/* <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul> */}
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
