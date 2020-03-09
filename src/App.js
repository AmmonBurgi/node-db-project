import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import MapMovie from './Components/MapMovie';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success('Movie Added To Favorites!')
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
        toast.error('Movie Removed!')
        this.setState({
          favMovies: res.data
        })
      }).catch(err => {
        console.log(err)
      })
    }
    updateStars = (id, stars) =>{
      axios.put(`/api/movies/${id}`, {stars})
      .then(res =>{
        this.setState({
          favMovies: res.data
        });
      }).catch(res => {
        console.log(res)
      })
    }
    // resetStar=(id) =>{
    //   console.log(this.state.favMovies)
    //   let index = this.state.favMovies.findIndex(el => el.movie.id === id)
  
    //   let newObj = this.state.favMovies[index]
    //   newObj.stars = 5
    //   let newArr = this.state.favMovies.splice(index, 1, newObj)
    //   this.setState({
    //     favMovies: newArr
    //   })
    // }
  
  render(){
    console.log(this.state.favMovies)

  return (

    <div className="App">
     <Header />
     <MapMovie addMovie={this.addMovies}/>
     <MovieList 
     favMovies={this.state.favMovies}
     deleteMovie={this.deleteMovie}
     updateStars={this.updateStars}
     />
     <Footer />
    <ToastContainer />
    </div>
   
  );
  }
}

export default App;
