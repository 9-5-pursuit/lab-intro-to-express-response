const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista, baby");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/steve-mcgarrett", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/coach-taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't lose");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/bruce-banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/jj-evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/hannibal-smith", (req, res) => {
  res.send("I love it when a plan comes together");
});

app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

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

app.get("/magic8", (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const response = magic8Responses[randomIndex];
  res.send(`<h1>${response}</h1>`);
});

module.exports = app;
