import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import MapMovie from './Components/MapMovie';
import MovieList from './Components/MovieList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      favMovies: []
    }
  }
  addMovies = (movie) =>{
    axios.post('/api/movies', {movie})
    .then(res =>{ 
      // console.log(res.data)
      this.setState({
        favMovies: res.data
      })
    }).catch(err => { 
      console.log(err)
    })
}
    deleteMovie = (id) =>{
      axios.delete(`/api/movies/${id}`)
      .then(res => {
        this.setState({
          favMovies: res.data
        })
      })
    }
  
  render(){
    console.log(this.state.favMovies)

  return (
    <div className="App">
     <Header />
     <MapMovie addMovie={this.addMovies}/>
     <MovieList 
     favMovies={this.state.favMovies}
     deleteMovie={this.deleteMovie}
     />
    </div>
  );
  }
}

export default App;
