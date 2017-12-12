import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import AddMovie from './AddMovie';
import { initialMovies, additionalMovies } from '../movies';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: initialMovies,
    };

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind(this);
  }

  loadAdditionalMovies() {
    const currentMovies = { ...this.state.movies };
    const newMovies = Object.assign(currentMovies, additionalMovies);

    this.setState({ movies: newMovies });
  }

  addMovieToGallery(movie) {
    const ts = Date.now();
    const newMovie = {};
    newMovie['movie'.concat(toString(ts))] = movie;
    const currentMovies = { ...this.state.movies };
    const newMovies = Object.assign(currentMovies, newMovie);
    this.setState({ movies: newMovies });
  }

  render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
        </div>
        <div className="add-movies">
          <button onClick={this.loadAdditionalMovies}>
            Load more...
          </button>
        </div>
        <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }
}

export default App;
