import React from 'react'
import FavMovies from './FavMovies'

function MovieList(props){
    let favMoviesMap = props.favMovies.map(element =>{
        // console.log(element)
        return <FavMovies
                favoriteMovie={element}
                deleteMovie={props.deleteMovie}
        />
    })
    return(
        <div className='movie-list'>
            <h1>My Favorite Movies</h1>
            {favMoviesMap}
        </div>
    )
}
export default MovieList