const movieData = require('../movies.json');
// let id = 0
let rating = 5
let favMovies = []
console.log(favMovies)

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movieData)
    },
    addMovie: (req, res) => {
        // console.log(req.body)
         let movie = req.body
        favMovies.push(movie)
        // console.log(favMovies)
        res.status(200).send(favMovies)
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        // console.log(req.params)
        let index = favMovies.findIndex(element => {
            // console.log(element.movie.id)
            return element.movie.id === +id})
        // console.log(index)
        favMovies.splice(index, 1)
        res.status(200).send(favMovies)
    }
    
}
// 'catchPokemon: (req, res) =>{
//     console.log(req.body)
//     const {pokemon} = req.body
//     pokemon.id = id
//     id++
//     caughtPokemon.push(pokemon)
//     res.status(200).send(caughtPokemon)
// },