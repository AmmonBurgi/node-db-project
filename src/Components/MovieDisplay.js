import React from 'react'

function MovieDisplay(props){
    // console.log(props)
    return(
        // <div className='movie-display'>
            <div className='movie-map'>
                <img onClick={() => props.addClick(props.movieInfo)} src={props.movieInfo.img} alt='movies' />
            </div>
        /* </div> */
    )
}
export default MovieDisplay