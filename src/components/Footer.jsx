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
            <FaLinkedin style={{ color: "black", fontSize: "3rem" }} />
          </NavLink>
          <NavLink href="https://github.com/Anthony-Verges">
            <AiFillGithub style={{ color: "black", fontSize: "3rem" }} />
          </NavLink>
        </div>
        <div className="join-me">
          <h4>contact me</h4>
          <a href="mailto:verges_anthony@hotmail.fr">
            <h5>verges_anthony@hotmail.fr</h5>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
