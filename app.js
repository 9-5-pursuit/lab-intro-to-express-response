const express = require('express')
const eightball = require('./8ball')

const app = express();

app.get('/', (request, response) => {
    response.send('')
})

app.get('/terminator', (request, response) => {
    response.send(`I'll be back`)
    response.status(200).send('Hasta la vista, baby')
})
app.get('/tim-gunn', (request, response) => {
    response.send(`Make it work`)
})
app.get('/jimlovell', (request, response) => {
    response.send(`Houston we have a problem`)
})
app.get('/gollum', (request, response) => {
    response.send(`My precious`)
})
app.get('/jackdawson', (request, response) => {
    response.send(`Im king of the world`)
})
app.get('/zeus', (request, response) => {
    response.send(`Release the kraken`)
})
app.get('/borg', (request, response) => {
    response.send(`Resistance is futile`)
})
app.get('/rocky', (request, response) => {
    response.send(`for once in my life im scared`)
})
app.get('/regis', (request, response) => {
    response.send(`Is that your final answer?`)
})
//8 ball
app.get('/magic8', (request, response) => {

    let index = Math.floor(Math.random() * eightball.length)
    response.send(eightball[index])
})
app.get('/magic8page', (request, response) => {

    let index = Math.floor(Math.random() * eightball.length)
    response.send(`<h1>${eightball[index]}</h1>`)
})

module.exports = app