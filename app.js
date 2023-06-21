const express = require("express");

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, world!')
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back`)
})

app.get('/homer-simpson', (req, res) => {
    res.send(`D'oh!`)
})

app.get('/solid-snake', (req, res) => {
    res.send(`Kept you waitin', huh?`)
})

app.get('/travis-bickle', (req, res) => {
    res.send(`You talkin' to me?`)
})

app.get('/rocky', (req, res) => {
    res.send(`Yo, adrian`)
})

app.get('/gollum', (req, res) => {
    res.send(`My precious`)
})

app.get('/frasier', (req, res) => {
    res.send(`I'm listening`)
})

app.get('/coach-mcguirk', (req, res) => {
    res.send(`Beer before liquor, never been sicker; liquor before beer, you're in the clear`)
})

app.get('/urkel', (req, res) => {
    res.send(`Did I do that?`)
})

app.get('/emeril', (req, res) => {
    res.send(`Bam!`)
})

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
})


module.exports = app;