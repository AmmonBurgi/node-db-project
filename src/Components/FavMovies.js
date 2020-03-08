import React, { Component } from 'react';

class FavMovies extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className='fav-component'>
                <img className='fav-movie-image' src={this.props.favoriteMovie.movie.img} alt='favorites' />
                <div className='movie-info'>
                    <button className='delete' onClick={() => this.props.deleteMovie(this.props.favoriteMovie.movie.id)}>X</button>
                    <span>Title: {this.props.favoriteMovie.movie.title}</span>
                    <span>Phase: {this.props.favoriteMovie.movie.phase}</span>
                    <span>Release Date: {this.props.favoriteMovie.movie.releaseDate}</span>
                </div>
            </div>
        )
    }
}
export default FavMovies