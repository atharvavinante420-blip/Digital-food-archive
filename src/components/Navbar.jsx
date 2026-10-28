import { NavLink, Link } from "react-router-dom";

function Navbar({ favoriteCount }) {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <span>🍲</span>
          <span>Digital Food Archive</span>
        </Link>

        <nav>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/archive">
            Archive
          </NavLink>

          <NavLink to="/oral-histories">
            Oral Histories
          </NavLink>

          <NavLink to="/favorites">
            Favorites
            {favoriteCount > 0 && (
              <span className="nav-favorite-count">
                {favoriteCount}
              </span>
            )}
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