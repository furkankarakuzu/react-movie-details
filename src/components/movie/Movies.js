import React from "react";
import { Row, Col } from "react-bootstrap";
import movies from "../../data/movies.json";
import MovieCard from "./MovieCard";
import Search from "../Search";

export default function Movies(props) {
  const movieItems = movies.moviesList.map(item => (
    <Col sm={6} className="mb-3" key={item.id}>
      <MovieCard
        id={item.id}
        title={item.title}
        detail={item.detail}
        imgSrc={item.image}
        imdb={item.imdb}
      />
    </Col>
  ));
  return (
    <>
      <h1 className="text-center mt-3">Movies</h1>
      <Search />
      <Row>{movieItems}</Row>
    </>
  );
}
