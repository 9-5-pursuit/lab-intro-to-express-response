const express = require(`express`);

const app = express();

const PORT = 3003;

app.get(`/`, (req, res) => {
  response.send(`Hello, world!`);
});

// Phrases
app.get(`/terminator`, (req, res) => {
  res.send(`I'll be back.`);
});

app.get(`/terminator2`, (req, res) => {
  res.send(`Hasta la vista, baby!`);
});

app.get(`/homer-simpson`, (req, res) => {
  res.send(`D'oh!`);
});

app.get(`/bruce-banner`, (req, res) => {
  res.send(`Don't make me angry...`);
});

app.get(`/hannibal-smith`, (req, res) => {
  res.send(`I love it when a plan comes together`);
});

app.get(`/fraiser`, (req, res) => {
  res.send(`I'm listening...'`);
});

app.get(`/borg`, (req, res) => {
  res.send(`Resistance is futile.`);
});

app.get(`/harry-callahan`, (req, res) => {
  res.send(`Go ahead, make my day.`);
});

app.get(`/zeus`, (req, res) => {
  res.send(`Release the Kraken!`);
});

app.get(`/jim-lovell`, (req, res) => {
  res.send(`Houston, we have a problem...`);
});

// Magic 8 Ball
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

app.get(`/magic8`, (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
