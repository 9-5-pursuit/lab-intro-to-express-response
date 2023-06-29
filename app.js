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

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/pak-chu", (req, res) => {
  res.send("I like hamsters");
});

app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/JJ-Evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/Gollum", (req, res) => {
  res.send("My precious");
});

app.get("/Rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});

function getRandomAnswer() {
  //Math.random returns a decimal number between 0 and 1
  //Generates a random index using Math.random() multiplied by the length of the magic8Responses array. 
  //The Math.floor() function is used to check that the index is an integer within the valid range of array indices.
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  
  //Returns the randomly selected answer from the magic8Responses array using the random index.
  return magic8Responses[randomIndex];
};

app.get("/", (req, res) => {
  res.status(418).send("Hello, world!");
});

 app.get("/magic8", (req, res) => {
   const magic8Answer = getRandomAnswer();
   res.status(404).send(`<h1>${magic8Answer}</h1>`);
 });

module.exports = app;
