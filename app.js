const express = require("express");

const app = express();

const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/Steve-McGarrett", (req, res) => {
  res.send("Book'em Danno!");
});

app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/Bruce-Banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/Borg", (req, res) => {
  res.send("Resistance is futile");
});

app.get("/Travis-Bickle", (req, res) => {
  res.send("You talkin' to me?");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/Frankenstein", (req, res) => {
  res.send("It's alive! It's alive");
});

app.get("/terminator", (req, res) => {
  res.send("Ill be back");
});

app.get("/terminator2", (req, res) => {
  res.send("Hasta la vista, baby");
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
  const randomResponse =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

  res.send(`<h1>${randomResponse}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
