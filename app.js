//Dependencies
const express = require("express");
//require is basically saying: go to node modules and go to the express folder...with this line of code you are bringing in express which is what we installed from node

//Configuration
const app = express();
//we are calling the express function here
//this line of code is conventional
//this is how we boot up a server
const PORT = 3003;

//ROUTES
//create a get request and give it a default path
// req, rest are BOTH huge objects
app.get("/", (request, response) => {
  response.send("Hello there!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  response.send("Hasta la vista, baby");
});

//received an error message when trying to add a new catchphrase to the previous route because The http protocol is very specific in that there is one response for every request.
//The error message is telling us that we are trying to set another set of headers after the first one.

app.get("/Emeril", (request, response) => {
  response.send("Bam!");
});

app.get("/Steve-McGarrett", (request, response) => {
  response.send("Book 'em Danno");
});

app.get("/Coach-Taylor", (request, response) => {
  response.send("Clear eyes, full hearts, can't Lose");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send(`D'Oh`);
});

app.get("/Bruce-Banner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/JJ-Evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/Hannibal-Smith", (request, response) => {
  response.send("I love it when a plan comes together");
});

app.get("/Fraiser", (request, response) => {
  response.send("I'm listening");
});

//LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
