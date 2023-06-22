const express = require('express')

const app = express()
const PORT = 3007
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

app.get("/", (request, response) => {
    response.send("Hello world!")
})
app.get("/terminator", (request, response) => {
    response.send("I'll be back")
})
app.get("/hannibal-smith", (request, response) => {
    response.send("I love it when a plan comes together")
})
app.get("/jim-lovell", (request, response) => {
    response.send("Houston, we have a problem")
})
app.get("/gollum", (request, response) => {
    response.send("My precious")
})
app.get("/jack-dawson", (request, response) => {
    response.send("I'm king of the world")
})
app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive")
})
app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry")
})
app.get("/james-bond", (request, response) => {
    response.send("the name is Bond, James Bond")
})
app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian")
})
app.get("/borg", (request, response) => {
    response.send("Resistance is futile")
})
app.get('/terminator', (req, res) => {
    res.send('I\ll be back')
    res.send('Hasta la vista, baby')
  })
app.get('/magic8', (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length)
    const magicResponse = magic8Responses[randomIndex]
    res.send(`<h1>${magicResponse}</h1>`)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
}) 

/**
 * Hannibal Smith - I love it when a plan comes together
Jim Lovell - Houston, we have a problem
Gollum - My precious
Jack Dawson - I'm king of the world!
Frankenstein - It's alive! It's alive
Bruce Banner - Don't make me angry
James Bond - the name is Bond, James Bond
Rocky - Yo, Adrian
Borg - Resistance is futile


 */