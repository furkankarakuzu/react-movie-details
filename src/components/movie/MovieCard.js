import React from "react";
import "../../style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  return (
    <Card>
      <img src={props.imgSrc} className="card-img-top" alt="..." />
      <Card.Body>
        <Card.Title>
          {props.title}
          <span className="text-dark float-right">
            IMDB Rating : {props.imdb}
          </span>
        </Card.Title>

        <p className="card-text detail text-dark">{props.detail}</p>
        <Link className="btn btn-primary" to={`/movie/${props.id}`}>
          Details..
        </Link>
      </Card.Body>
    </Card>
  );
}
