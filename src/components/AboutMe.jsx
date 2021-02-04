import "./style/AboutMe.css";
import antho from "./images/antho.png";

const AboutMe = () => {
  <div className="about-me">
    <div className="left-about-me">
      <h3>About Me</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
        eligendi dolorem possimus minus, quaerat enim sed quia quam blanditiis
        natus accusamus aperiam nesciunt consectetur totam! Aspernatur corrupti
        fuga eos impedit.
      </p>
    </div>
    <div className="right-about-me">
      <img src={antho} alt="" />
    </div>
  </div>;
};

export default AboutMe;
