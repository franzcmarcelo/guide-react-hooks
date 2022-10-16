import { Link, NavLink } from 'react-router-dom';
import NavToggler from './NavToggler';

const NAV_LINKS = [
  { to: '/home', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/login', text: 'Login' },
];

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark my-4 rounded-3'>
      <div className='container-fluid'>

        <NavToggler />
        <Link className='navbar-brand' to='/home'>Navbar</Link>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {
              NAV_LINKS.map(({ to, text }) => (
                <li className='nav-item' key={to}>
                  <NavLink
                    className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`}
                    to={to}
                  >{text}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;