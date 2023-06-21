const express = require("express");

//configuration
const app = express();
// const PORT = 3003;

//Create a new route /magic8 - That randomly returns one of the following responses, each time you visit the site.

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

//ROUTES
app.get(`/magic8`, (request, response) => {
  const magic8RandomIndex = Math.floor(Math.random() * magic8Responses.length);
  const magic8RandomElement = magic8Responses[magic8RandomIndex];
  response.send(`<h1>${magic8RandomElement}</h1>`);
});

app.get("/", (request, response) => {
  response.send("Hello, world!");
});
app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/peach", (request, response) => {
  response.send("Here we go!");
});

app.get("/mario", (request, response) => {
  response.send("It's-a-me, Mario!");
});

app.get("/luigi", (request, response) => {
  response.send("Let's play ball!");
});

app.get("/browser", (request, response) => {
  response.send("Wah, Hah, HAH!");
});

app.get("/wario", (request, response) => {
  response.send("I'm-a gonna win!");
});

app.get("/toad", (request, response) => {
  response.send("Have fun!");
});

app.get("/yoshi", (request, response) => {
  response.send("Mario, Please!");
});

app.get("/daisy", (request, response) => {
  response.send("Here comes Daisy!");
});

app.get("/toadette", (request, response) => {
  response.send("Yippee, yeah!");
});

//Listen
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

// EXPORT
module.exports = app;
