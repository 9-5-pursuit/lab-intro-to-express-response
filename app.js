const express = require("express");

const app = express();

//----------------------------------

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

//----------------------------------

app.get("/", (req, res) => {
  //res.send("Server is now present");
  res.status(418).send("Hello, world!");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista, baby");
});
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});
app.get("/emeril", (req, res) => {
  res.send("Bam!");
});
app.get("/steve-mcgarret", (req, res) => {
  res.send("Book 'em Danno!");
});
app.get("/gollum", (req, res) => {
  res.send("My precious");
});
app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});
//------------------------------------------
app.get("/magic8", (req, res) => {
  res.send(
    `<h1>
      ${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}
    </h1>`
  );
});

//---------------------------------

module.exports = app;
