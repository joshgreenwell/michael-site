const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Home'))
app.get('/about', (req, res) => res.send('about'))
app.get('/hobbies', (req, res) => res.send('nobbies'))
app.get('/sw', (req, res) => res.send('sw'))
app.get('/climbing', (req, res) => res.send('climbing'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))