import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "./style/CardResume.css";

const CardResume = ({ name, description }) => {
  return (
    <div>
      <Row style={{ marginTop: "2rem" }}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body>
            <CardTitle tag="h5" style={{ letterSpacing: "1px" }}>
              {name}
            </CardTitle>
            <CardText style={{ letterSpacing: "1px" }}>{description}</CardText>
            <Button className="button-rasp">See on GitHub</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardResume;
