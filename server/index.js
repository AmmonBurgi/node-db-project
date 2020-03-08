const express = require('express')
const cors = require('cors')
const ctrl = require('./controllers/movieCtrl')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/movies', ctrl.getMovies)
app.post('/api/movies', ctrl.addMovie)
app.delete('/api/movies/:id', ctrl.deleteMovie)

const port = 4020
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))