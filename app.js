const express = require("express");
const app = express();

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

app.get("/", (request, response) => {
  response.status(418).send("Hello, world!");
});

app.get("/Bruce-Banner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/Zeus", (request, response) => {
  response.send("Release the Kraken");
});

app.get("/Frankenstein", (request, response) => {
  response.send("It's alive! It's alive");
});
app.get("/Velma", (request, response) => {
  response.send("Jinkies");
});
app.get("/Tweety", (request, response) => {
  response.send("I Tawt I Taw A Puddy Tat.");
});
app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});
app.get("/Homer-Simpson", (request, response) => {
  response.send("D'Oh");
});
app.get("/Fred-Flinstone", (request, response) => {
  response.send("Yabba Dabba Doo");
});
app.get("/Rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/magic8", (request, response) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);

  const string = magic8Responses[randomIndex];
  response.send(string);
});

module.exports = app;
