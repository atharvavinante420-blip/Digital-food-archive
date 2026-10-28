import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            Food
            <em>Archive</em>
          </Link>

          <p>
            Preserving food traditions,
            personal memories and cultural
            stories for future generations.
          </p>

        </div>


        <div className="footer-column">

          <span>
            EXPLORE
          </span>

          <Link to="/">
            Home
          </Link>

          <Link to="/archive">
            Archive
          </Link>

          <Link to="/oral-histories">
            Oral Histories
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>


        <div className="footer-column">

          <span>
            PROJECT
          </span>

          <p>
            Digital Food Archive
          </p>

          <p>
            India · 2026
          </p>

          <p>
            Built with React
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Digital Food Archive
        </span>

        <span>
          Stories preserved through technology.
        </span>

      </div>

    </footer>
  );
}

export default Footer;