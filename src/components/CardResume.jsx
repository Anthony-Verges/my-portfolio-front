import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
} from "reactstrap";
import "./style/CardResume.css";
import img7 from "./images/img7.jpg";

const CardResume = ({ name, description, date }) => {
  return (
    <div>
      <Row style={{ marginTop: "2rem" }}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body>
            <CardImg top width="50%" src={img7} alt="Card image cap" />
            <CardTitle
              tag="h5"
              style={{ letterSpacing: "1px", paddingTop: "5rem" }}
            >
              {name}
            </CardTitle>
            <CardText
              style={{
                letterSpacing: "1px",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              {description}
            </CardText>
            <CardText style={{ letterSpacing: "1px", fontWeight: "bold" }}>
              {date}
            </CardText>
            <Button className="button-rasp">See on GitHub</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardResume;
