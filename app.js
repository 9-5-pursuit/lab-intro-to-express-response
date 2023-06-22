// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
// const PORT = 3003;

const magic8Responses = require("./data.js");

// ROUTES
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/terminator2", (req, res) => {
  res.send("Hasta la vista, baby");
});

app.get("/Hannibal-Smith", (req, res) => {
  res.send("I love it when a plan comes together");
});

app.get("/magic8", (req, res) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  res.send(`<h1>${magic8Responses[getRandomInt(magic8Responses.length)]}</h1>`);
});

// LISTEN
// app.listen(PORT, () => {
//   console.log(`server is now running on port ${PORT}`);
// });

// EXPORT
module.exports = app;
