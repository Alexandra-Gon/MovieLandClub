import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarBackground">
      <div className="navbarContainer">
        <Link to="/">
          <img
            className="logoMovie"
            src={require("../../images/logoMovie.png")}
            alt="Logo image"
          />
        </Link>
        <div className="navbarLinkContainer">
          <Link className="navbarLink" to="/">
            MOVIES
          </Link>
          <Link className="navbarLink" to="/moviesblog">
            BLOG
          </Link>
          <Link className="navbarLink" to="/about">
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
