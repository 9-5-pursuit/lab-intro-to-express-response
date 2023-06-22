const express = require("express");

const app = express();

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello class this is from localhost:3003");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/gollum", (req, res) => {
  res.send("My precious");
});

app.get("/fraiser", (req, res) => {
  res.send("I'm listening");
});

app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/frankenstein", (req, res) => {
  res.send("It's alive! It's alive");
});

app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

app.get("/monkey-d-luffy", (req, res) => {
  res.send("I'm gonna be King of the Pirates!!");
});

app.get("/uzumaki-naruto", (req, res) => {
  res.send("Believe it.");
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
  res.send(`
    <h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>
  `);
});
