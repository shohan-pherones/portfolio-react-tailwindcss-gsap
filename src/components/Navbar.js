import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Anchor from "./Anchor";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center">
      <Link to="/" className="link-item">
        Sunerah Binte Ayesha
      </Link>
      <div className="links flex gap-10">
        <Link to="/" className="link-item">
          Home
        </Link>
        <HashLink to="#about" className="link-item">
          About
        </HashLink>
        <HashLink to="#skills" className="link-item">
          Skills
        </HashLink>
        <HashLink to="#projects" className="link-item">
          Projects
        </HashLink>
        <Link to="/blogs" className="link-item">
          Blogs
        </Link>
        <HashLink to="#contact" className="link-item">
          Contact
        </HashLink>
      </div>
      <Anchor href="https:/www.google.com" text="Resume" />
    </div>
  );
};

export default Navbar;
