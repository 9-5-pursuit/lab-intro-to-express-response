const express = require("express");

const app = express();

const PORT = 3003;
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

function getRandomResponse() {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  return magic8Responses[randomIndex];
}

app.get("/", (request, response) => {
  response.send(`${getRandomResponse()}`);
});
app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});
app.get("/terminator2", (req, res) => {
  res.send("hasta lavista baby");
});
app.get("/emeril", (request, response) => {
  response.send("Bam!");
});

app.get("/steve-mcgarret", (request, response) => {
  response.send("I'll be back");
});

app.get("/coach-taylor", (request, response) => {
  response.send("Clear eyes, full hearts, cant lost");
});

app.get("/homer-simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/batman", (request, response) => {
  response.send("To the batmobile");
});

app.get("/fraiser", (request, response) => {
  response.send("I'm listening");
});

app.get("/regis", (request, response) => {
  response.send("is that your final answer");
});

app.get("/travis-bickle", (request, response) => {
  response.send("You talking to me?");
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
