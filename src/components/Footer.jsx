import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { NavLink } from "reactstrap";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social-reseaux">
          <NavLink href="https://www.linkedin.com/in/anthony-vergès">
            <FaLinkedin style={{ color: "#4A4A4A", fontSize: "2.5rem" }} />
          </NavLink>
          <NavLink href="https://github.com/Anthony-Verges">
            <AiFillGithub style={{ color: "#4A4A4A", fontSize: "2.5rem" }} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
