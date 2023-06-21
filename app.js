const express = require("express");

const app = express();

app.get("/terminator", (req, res) => {
  res.send("I'll be back.");
  //   res.send("Hasta la vista, baby");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam");
});

app.get("/James-Bond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

app.get("/Coach-Taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/Bruce-Banner", (req, res) => {
  res.send("Don't make me angry");
});

app.get("/Jim-Lovell", (req, res) => {
  res.send("Houston, we have a problem");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Hannibal-Smith", (req, res) => {
  res.send("I love it when a plan comes together");
});

app.get("/Fraise", (req, res) => {
  res.send("I'm listening");
});

app.get("/magic8", (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}.`);
});
