import {
  Link,
  NavLink,
} from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-inner">

        <Link
          to="/"
          className="brand"
        >

          <span className="brand-mark">
            FA
          </span>

          <span className="brand-name">
            Digital
            <strong>Food Archive</strong>
          </span>

        </Link>


        <nav className="nav-links">

          <NavLink
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink to="/archive">
            Archive
          </NavLink>

          <NavLink to="/oral-histories">
            Oral Histories
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;