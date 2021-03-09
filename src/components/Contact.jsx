import axios from "axios";
import { useState } from "react";
import "./style/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      surname: surname,
      email: email,
      text: text,
    };

    const resetForm = () => {
      setName("");
      setSurname("");
      setEmail("");
      setText("");

      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    };

    axios.post(`http://localhost:5000/api/v1/forma`, data).then((res) => {
      setIsSent(true);
      resetForm();
    });
  };

  return (
    <div className="container-contact-form">
      <form onSubmit={formSubmit}>
        <h1>Contact me</h1>
        <label>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Surname"
            required
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            value={surname}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email adress"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <textarea
            placeholder="Your message"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </label>

        {isSent ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              backgroundColor: "#A5EE79",
              borderRadius: "10px",
              color: "white",
              width: "15rem",
              height: "3rem",
            }}
          >
            Message envoyé
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              borderRadius: "10px",
              width: "15rem",
              height: "3rem",
            }}
          ></div>
        )}

        <button className="btn" type="submit">
          Send an email
        </button>
      </form>
    </div>
  );
};

export default Contact;
