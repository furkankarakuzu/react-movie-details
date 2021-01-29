import React from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import movies from "../../data/movies.json";

export default function MovieDetail(props) {
  const params = useParams();
  const { id } = params;
  const moviesEl = movies.moviesList
    .filter(item => item.id === Number(id))
    .map(item => (
      <div key={item.id}>
        <h1 className="text-center mb-3">{item.title}</h1>
        <Row className="text-center">
          <Col sm={6}>
            <img
              src={item.image}
              className="card-img-top mb-3"
              alt={item.title}
            />
          </Col>
          <Col sm={6}>
            <iframe
              className="card-img-top mb-3"
              width="480"
              height="360"
              src={item.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Col>
        </Row>

        <div className="text-center">
          <span className="mr-3">
            <b>Director</b> : {item.director}
          </span>
          <span className="mr-3">
            <b> IMDB Rating </b> : {item.imdb}
          </span>
        </div>
        <p className=" mt-3">{item.detail}</p>
      </div>
    ));

  return (
    <>
      <Breadcrumb className="bg-success mt-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="breadcrumb-item">Details</li>
        </ol>
      </Breadcrumb>
      {moviesEl}
    </>
  );
}
