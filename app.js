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

let magic8Answer =
  magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

// app.get("/", (req, resp) => {
//   resp.status(200).send("WASSSSSSAAAAAAAAAP");
// });

app.get("/", (req, resp) => {
  resp.status(418).send("Hello, world!");
});

app.get("/magic8", (req, resp) => {
  resp.send(`<h1>${magic8Answer}</h1>`);
});

// - - - CATCHPHRASE - - -
app.get("/thadadoe", (req, resp) => {
  resp.send("SHIDDUMA");
});

app.get("/terminator", (req, resp) => {
  resp.send("I'll be back");
});

app.get("/godfather", (req, resp) => {
  resp.send("I'm gunna make him an offer he can't refuse");
});

app.get("/naruto", (req, resp) => {
  resp.send("BELIEVE IT!");
});

app.get("/groot", (req, resp) => {
  resp.send("I am Groot!");
});

app.get("/bad-boys", (req, resp) => {
  resp.send("We ride together, We die together, Bad Boys For Life");
});

app.get("/buzz-lightyear", (req, resp) => {
  resp.send("To Infinity & Beyond!");
});

app.get("/jerry-maguire", (req, resp) => {
  resp.send("Show me the money!");
});

app.get("/bruce-almighty", (req, resp) => {
  resp.send("And that's the way the cookie crumbs");
});

app.get("thanos", (req, resp) => {
  resp.send("I am Inevitable");
});

module.exports = app;
