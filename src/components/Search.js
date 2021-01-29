import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation, useHistory, Link } from "react-router-dom";
import movies from "../data/movies.json";
import MovieCard from "./movie/MovieCard";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      inputValue.current.focus();
      inputValue.current.value = q;

      const productResults = movies.moviesList
        .filter(item => item.title.toLowerCase().includes(q.toLowerCase()))
        .map(item => (
          /*<li key={item.id} className="list-group-item">
            <Link to={`/movie/${item.id}`}>{item.title}</Link>
          </li>*/
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

      setSearchResult(productResults);
    } else {
      inputValue.current.focus();
    }
    console.log(new Date());
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="search" className="text-white">
            {" "}
            Search a Movie
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            placeholder="Search a movie"
            ref={inputValue}
            onChange={e => {
              if (e.target.value == "") {
                history.push(`/movies`);
              } else {
                history.push(`/search?q=${e.target.value}`);
              }
            }}
          />
        </div>

        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-block mt-2"
            onClick={handleForm}
          >
            Search
          </button>
        </div>
      </form>
      <hr />
      <Row>{searchResult}</Row>
    </>
  );
}

export default Search;
