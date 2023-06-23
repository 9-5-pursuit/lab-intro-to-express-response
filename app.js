const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    response.status(418).send("Hello, world")
})

app.get("/tim-gunn", (request, response)=>{
    response.send("Make it work")
})

app.get("/terminator", (request, response)=>{
    response.send("I'll be back");
    // this will cause a server error, only one respone per request
    response.send("Hasta la vista, baby")
})

app.get("/magic8", (request, response)=>{

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

  let magic8answers=magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    response.send(`<h1>${magic8answers}</h1>`)
})

module.exports = app;