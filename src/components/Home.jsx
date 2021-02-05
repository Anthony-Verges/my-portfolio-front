import { useState, useEffect } from "react";
import { Spinner, Col, NavLink } from "reactstrap";
import axios from "axios";
import AboutMe from "./AboutMe.jsx";
import "./style/Home.css";
import { Button } from "reactstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt, FaReact, FaDev } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { RiMacbookLine } from "react-icons/ri";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";

function Home() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/skill")
      .then((res) => {
        console.log(res.data);
        setSkills(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <Col className="text-center">
        <Spinner className="spinner" size="xl" />
      </Col>
    );
  }
  return (
    <>
      <div className="photo-background">
        <img
          src={img10}
          alt=""
          style={{
            width: "100%",
            height: "80vh",
            opacity: "0.9",
            objectFit: "cover",
          }}
        />
        <p className="texte-background">Anthony Vergès</p>
      </div>

      <h1 className="title">Web Developper Junior React Js</h1>
      {/* <AboutMe /> */}
      <p className="description">
        Passionate about computers, I'm currently training at the Wild Code
        School in order to make a living from Web Development and web jobs. I am
        open to any kind of project and opportunity that could help me to
        improve my skills.
      </p>

      <a href="mailto:verges_anthony@hotmail.fr">
        <Button className="contact">Contact Me</Button>
      </a>
      <div className="all-photo-link">
        {/* <NavLink href="https://wildcodeschool.github.io/btz_p1_lux-raspi/index.html"> */}
        <a href="https://wildcodeschool.github.io/btz_p1_lux-raspi/index.html">
          <div className="contenant">
            <img
              className="img"
              src={img8}
              alt=""
              style={{ width: "25rem", height: "18rem", marginRight: "1rem" }}
            />
            <p className="texte-centrer">Raspberry Luxe version</p>
          </div>
        </a>

        {/* </NavLink> */}

        <div className="contenant">
          <img
            className="img"
            src={img2}
            alt=""
            style={{ width: "25rem", height: "18rem", marginRight: "1rem" }}
          />
          <p className="texte-centrer">Wild Programmer Humor</p>
        </div>
        <div className="contenant">
          <img
            className="img"
            src={img3}
            alt=""
            style={{ width: "25rem", height: "18rem" }}
          />
          <p className="texte-centrer">Follow the market</p>
        </div>
        <div className="contenant">
          <img
            className="img"
            src={img4}
            alt=""
            style={{
              width: "25rem",
              height: "18rem",
              marginRight: "1rem",
              marginTop: "1rem",
            }}
          />
          <p className="texte-centrer">Hackaton : BlaBlaCalèche</p>
        </div>
        <div className="contenant">
          <img
            className="img"
            src={img5}
            alt=""
            style={{
              width: "25rem",
              height: "18rem",
              marginRight: "1rem",
              marginTop: "1rem",
            }}
          />
          <p className="texte-centrer"> Hackaton : RoadBook</p>
        </div>
        <div className="contenant">
          <img
            className="img"
            src={img6}
            alt=""
            style={{ width: "25rem", height: "18rem", marginTop: "1rem" }}
          />
          <p className="texte-centrer">Bot Discord</p>
        </div>
      </div>
      <h1 style={{ marginTop: "5rem", letterSpacing: "1px" }}>Techonologies</h1>
      <div className="technos">
        <div className="card-skill">
          <FaReact size="3rem" />
          <h4>{skills[0].name}</h4>
          <p>
            React is probably my favourite library for creating web pages. I
            like its syntax and the possibilities it offers.
          </p>
        </div>
        <div className="card-skill">
          <AiFillGithub size="3rem" />
          <h4>GitHub</h4>
          <p>
            GitHub allows me to keep track of my work, but also to coexist with
            git, the control version.
          </p>
        </div>
        <div className="card-skill">
          <FaGitAlt size="3rem" />
          <h4>Git</h4>
          <p>
            Git is a necessary tool for all developers today. It is impossible
            for me not to work with it.
          </p>
        </div>
        <div className="card-skill">
          <SiJavascript size="3rem" />
          <h4>Javascript Vanilla</h4>
          <p>
            Javascript is my first programming language but also the one I know
            best at the moment. I aspire to discover many languages in the
            course of my professional life.
          </p>
        </div>
        <div className="card-skill">
          <RiMacbookLine size="3rem" />
          <h4>Environment</h4>
          <p>
            I most often work on Mac Os, but I also enjoy the Linux environment.
          </p>
        </div>
        <div className="card-skill">
          <BsBootstrapFill size="3rem" />
          <h4>Boostrap</h4>
          <p>
            Boostrap makes it possible to make an application responsive quickly
            and to be able to focus on the functionality of the application.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
