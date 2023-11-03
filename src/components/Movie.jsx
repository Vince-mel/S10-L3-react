import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = (data) => {
  return (
    <Col className="col-12 col-sm-6 col-md">
      <Link to={"/movie-details/" + data.dataId}>
        <img src={data.img} className="poster" alt="description" />
      </Link>
    </Col>
  );
};

export default Movie;
