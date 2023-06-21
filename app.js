// Dependencies
const express = require(`express`);

// Configuration
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

// Routes
app.get(`/magic8`, (request, response) => {
  const magic8RandomIndex = Math.floor(Math.random() * magic8Responses.length);
  const magic8RandomElement = magic8Responses[magic8RandomIndex];
  response.send(`<h1>${magic8RandomElement}</h1>`);
});

app.get(`/`, (request, response) => {
  response.send(`Hello, world!`);
});

app.get(`/terminator`, (request, response) => {
  response.send(`I'll be back`);
});
app.get(`/terminator2`, (request, response) => {
  response.send(`Hasta La vista`);
});
app.get(`/zeus`, (request, response) => {
  response.send(`Release the Kraken`);
});
app.get(`/rocky`, (request, response) => {
  response.send(`Yo, Adrian`);
});
app.get(`/frankenstein`, (request, response) => {
  response.send(`It's alive! It's alive`);
});
app.get(`/gollum`, (request, response) => {
  response.send(`My precious`);
});
app.get(`/borg`, (request, response) => {
  response.send(`Resistance is futile`);
});
app.get(`/rick`, (request, response) => {
  response.send(`wubba lub dub dub`);
});
app.get(`/pak`, (request, response) => {
  response.send(`hamsterlord rules all`);
});
app.get(`/fraiser`, (request, response) => {
  response.send(`I'm listening`);
});
app.get(`/batman`, (request, response) => {
  response.send(`I'm batman!`);
});

// Listen
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
