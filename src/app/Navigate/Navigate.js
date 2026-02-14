import { NavLink } from "react-router";
import './Navigate.css';

function Navigate() {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <li>
          <NavLink to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/coding">
            coding
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            about
          </NavLink>
        </li>
      </ul>
      <hr/>
    </nav>
  );
}

export default Navigate;