import React, { Component } from 'react';

class FavMovies extends Component{
    constructor(){
        super()
        this.state={
        }
    }
// resetButton(pizza){
// pizza = []
// }

    render(){
        let stars = []
        for(let i=0; i < this.props.favoriteMovie.movie.stars; i++){
            // console.log(i)
            stars.push(<p className='star-rating' key={i} onClick={() => this.props.updateStars(this.props.favoriteMovie.movie.id, i + 1)}>&#9733;</p>)
        //    console.log(stars) 
        }
        
        return(
            <div className='fav-component'>
                <img className='fav-movie-image' src={this.props.favoriteMovie.movie.img} alt='favorites' />
                <section className='movie-info'>
                    <span className='title'>{this.props.favoriteMovie.movie.title}</span>
                    <span className='phase'>PHASE: 
                    {this.props.favoriteMovie.movie.phase}</span>
                    <span className='date'>RELEASE-DATE:
                    {this.props.favoriteMovie.movie.releaseDate}</span>
                    <span className='gross'>GROSS: 
                    {this.props.favoriteMovie.movie.gross}</span>
                    <span className='time'>RUN-TIME: {this.props.favoriteMovie.movie.runningTime}</span>
                    <div className='rating'>
                    {stars}
                    {/* <button onClick={() => this.props.resetStar(this.props.favoriteMovie.movie.id)}>reset</button> */}
                    </div>
                </section>
                <button className='delete' onClick={() => this.props.deleteMovie(this.props.favoriteMovie.movie.id)}>REMOVE</button>
            </div>
        )
    }
}
export default FavMovies