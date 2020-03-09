import React, { Component } from 'react';
import axios from 'axios'
import MovieDisplay from './MovieDisplay'

class MapMovie extends Component{
    constructor(){
        super()
        this.state={
            movieInfo: [],
        }
    }
    componentDidMount = () =>{
        axios.get('/api/movies')
        .then(res => {
            // console.log(res.data)
            this.setState({movieInfo: res.data})
        })
        .catch(err => console.log(`I do believe there is an error ${err}`))
    }
    addClick = (movie) =>{
        // console.log(movie)
    //    this.props.addMovie(movie)
    }
  
    render(){
        // console.log(this.movieInfo.title)
        let movieMap = this.state.movieInfo.map((element, index) => { 
            return <MovieDisplay 
            key={index}
            movieInfo={element} 
            addClick={this.addClick}
            addMovie={this.props.addMovie}
            />
        })
        
        return(
            <div className='map-movie'>
               {movieMap}
            </div>
        )
    }
}
export default MapMovie