const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.send('')
})

app.get('/terminator', (request, response) => {
    response.send(`I'll be back`)
    response.send('Hasta la vista, baby')
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







app.post('/', (request, response) => {
    console.log(response);
    response.send('')
})

app.post('/', (request, response) => {
    response.status(401).send('')
}
)

app.put('/', (request, response) => {
    response.status(202).json({
    })
})
// app.listen(PORT, () => {
//     console.log(`server is now running on port ${PORT}`);
// })

module.exports = app