import React from "react";
import { Col } from "react-bootstrap";
const Movie = (props) => {
  return (
    <Col className="col-12 col-sm-6 col-md">
      <img src={props.img} className="poster" alt="description" />
    </Col>
  );
};

export default Movie;
