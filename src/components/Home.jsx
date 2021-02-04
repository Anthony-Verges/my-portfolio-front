import "./Home.css";
import { Link } from "react-router-dom";
import { UncontrolledCarousel, Button } from "reactstrap";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

function Home() {
  const items = [
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];
  return (
    <>
      <div className="caroussel">
        <UncontrolledCarousel items={items} />
      </div>
      <h1 className="title">Web Developper Junior React Js</h1>
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
        <img src={img1} alt="" style={{ width: "30rem", height: "30rem" }} />
        <img src={img2} alt="" style={{ width: "30rem", height: "30rem" }} />
        <img src={img3} alt="" style={{ width: "30rem", height: "30rem" }} />
        <img src={img4} alt="" style={{ width: "30rem", height: "30rem" }} />
        <img src={img5} alt="" style={{ width: "30rem", height: "30rem" }} />
        <img src={img6} alt="" style={{ width: "30rem", height: "30rem" }} />
      </div>

      <div buttons-naviguate-app>
        <div>
          <Link to="/resume">Resume</Link>
        </div>
        <div>
          <Link to="/myportfolio">My portfolio</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
