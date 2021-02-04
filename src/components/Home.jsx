import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { NavLink } from "reactstrap";
import antho from "./antho.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    // <div class="container">
    <div class="row">
      <div class="col-2" style={{ backgroundColor: "#E8E9E9" }}>
        <p>Anthony Vergès</p>

        <img className="photo-id" src={antho} alt="photoProfil" />
        <p>
          Passionate about computers, I'm currently training at the Wild Code
          School in order to make a living from Web Development and web jobs. I
          am open to any kind of project and opportunity that could help me to
          improve my skills.
        </p>
        <div className="social-reseaux">
          <NavLink href="https://www.linkedin.com/in/anthony-vergès">
            <FaLinkedin />
          </NavLink>
          <NavLink href="https://github.com/Anthony-Verges">
            <AiFillGithub />
          </NavLink>
        </div>
        <hr style={{ color: "black" }}></hr>
        <div buttons-naviguate-app>
          <div className="link-home">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="link-home">
            <Link to="/myportfolio">My portfolio</Link>
          </div>
          <div className="link-home">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div class="col-10">
        <h1 style={{ color: "white" }}>Web Developper Junior</h1>
      </div>
    </div>
    // </div>
  );
}

export default Home;
