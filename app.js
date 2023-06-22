const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello!");
});

app.get("/terminator", (request, response) => {
  response.send("<h1>I'll be back</h1>");
  response.send("Hasta la vista, baby");
});

app.get("/tim-gunn", (request, response) => {
  response.send("Make it work");
});

app.get("/Emeril", (request, response) => {
  response.send("<h1>BAM</h1>");
});
app.get("/steve-mcgarrett", (request, response) => {
  response.send("<h1>Book 'em Danno!</h1>");
});
app.get("/Coach-Taylor", (request, response) => {
  response.send("<h1>Clear eyes, full hearts, can't Lose</h1>");
});
app.get("/homer-simpson", (request, response) => {
  response.send("<h1>D'OH</h1>");
});
app.get("/bruce-banner", (request, response) => {
  response.send("<h1>Don't make me angry</h1>");
});
app.get("/jj-evans", (request, response) => {
  response.send("<h1>Dy-no-myte!</h1>");
});
app.get("/batman", (request, response) => {
  response.send("<h1>To the Batmobile!</h1>");
});
app.get("/hannibal-smith", (request, response) => {
  response.send("<h1>I love it when a plan comes together</h1>");
});
app.get("/fraiser", (request, response) => {
  response.send("<h1>Is that your final answer?</h1>");
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

  let randomNum = Math.floor(Math.random() * 18) + 1;

  response.send(`<h1>${magic8Responses[randomNum]}</h1>`);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
