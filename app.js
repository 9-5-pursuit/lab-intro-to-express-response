const express = require('express');

const app = express();


// app.get('/' ,(request, response) => {
//     response.status(200).send("Hello, world!"); 

// });

app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});


app.get('/terminator',(request, response) => {
    response.send ("I'll be back")
    response.send("Hasta la vista, baby");
});

app.get('/gollum' ,(request, response) => {
    response.send("My precious")
});

app.get('/the-doctor' ,(request, response) => {
    response.send(
      `We're all stories, in the end. Just make it a good one, eh?`
    );
});

app.get('/homer-simpson' ,(request, response) => {
    response.send("D'Oh");
});

app.get("/batman", (request, response) => {
    response.send("To the Batmobile");
});

app.get("/don-draper", (request, response) => {
    response.send("If you don't like what's being said, change the conversation");
});

app.get("/tony-montana", (request, response) => {
    response.send("Say hello to my little friend");
});

app.get("/jack-dawson", (request, response) => {
    response.send("I'm king of the world!");
});

app.get("/marty-mcfly", (request, response) => {
    response.send("This is heavy...");
});

app.get("/emmett-brown", (request, response) => {
    response.send("9.21 Gigawatts!");
});

app.get("/magic8", (request, response) => {

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
  "Very doubtful",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  response.send(`<h1>${magic8Responses[getRandomInt(magic8Responses.length)]}</h1>`);
});


module.exports = app;