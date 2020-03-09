import React from 'react'
import FavMovies from './FavMovies'

function MovieList(props){
    let favMoviesMap = props.favMovies.map((element, index) =>{
        // console.log(element)
        return <FavMovies
                key={index}
                favoriteMovie={element}
                deleteMovie={props.deleteMovie}
                updateStars={props.updateStars}
        />
    })
    return(
        <div className='movie-list'>
            <h1 className='my-fav'>FAVORITE MOVIES</h1>
            {favMoviesMap}
        </div>
    )
}
export default MovieList