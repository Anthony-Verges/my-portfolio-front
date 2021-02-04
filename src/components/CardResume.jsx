import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const CardResume = ({ name, description }) => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card body>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>{description}</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardResume;
