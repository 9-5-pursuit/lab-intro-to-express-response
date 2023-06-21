const express = require("express");

const app = express();

const data = [
  {
    actor: "Bruce Banner",
    quote: "Don't make me angry",
  },
  {
    actor: "Batman",
    quote: "To the Batmobile!",
  },
  {
    actor: "Hannibal Smith",
    quote: "I love it when a plan comes together",
  },
  {
    actor: "Fraiser",
    quote: "I'm listening",
  },
  {
    actor: "Regis",
    quote: "Is that your final answer?",
  },
  {
    actor: "Bruce Banner",
    quote: "Don't make me angry",
  },
  {
    actor: "Borg",
    quote: "Resistance is futile",
  },
  {
    actor: "James Bond",
    quote: "the name is Bond, James Bond",
  },
  {
    actor: "Fox Mulder ",
    quote: "The truth is out there",
  },
];

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

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/magic8", (req, res) => {
  const randIndex = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<h1>${magic8Responses[randIndex]}</h1>`);
});

app.get("/:person", (req, res) => {
  const { person } = req.params;

  const filteredObj = data.filter(
    (item) =>
      item.actor.split(" ").join("").toLowerCase() === person.toLowerCase()
  );

  if (filteredObj.length > 0) {
    res.send(filteredObj[0].quote);
  } else {
    res.send("Actor not found!");
  }
});

app.get("/terminator", (req, res) => {
  res.send("I'LL BE BACK");
});

module.exports = app;
