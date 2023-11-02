import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import Movie from "./Movie";

class MoviesCards extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=ac23fca";
    let response = await fetch(
      `${apiLink}&s="${this.props.title.toLowerCase()}"`
    );
    let moviesRequest = await response.json();
    this.setState({ movies: moviesRequest }, () =>
      console.log(this.state.movies.Search)
    );
  };
  render() {
    return (
      <>
        <h2>{this.props.category}</h2>
        <Container fluid>
          <Row className="row row-cols-6">
            {this.state.movies.Search &&
              this.state.movies.Search.slice(0, 6).map((movie) => (
                <Movie key={movie.imdbID} img={movie.Poster} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default MoviesCards;
