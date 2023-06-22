//dependencies
const express = require("express");
//configuration
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

const randomIndex = Math.floor(Math.random() * magic8Responses.length);
const randomResponse = magic8Responses[randomIndex];

//routs
app.get("/", (request, response) => {
    response.send("Hello, world!");
})

//One message shows and not both / only message one shows 
app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  //response.send("Hasta la vista, baby");
});

 app.get("/tim/gunn", (request, response) => {
   response.send(`Here's looking at you, kid`);
 });

 app.get("/Steve-McGarrett", (request, response) => {
   response.send(`Book 'em Danno!`);
 });

 app.get("/Coach/Taylor", (request, response) => {
   response.send(`Clear eyes, full hearts, can't Lose`);
 });

 app.get("/HomerSimpson", (request, response) => {
   response.send(`D'Oh`);
 });

 app.get("/JJEvans", (request, response) => {
   response.send("Dy-no-myte!");
 });

 app.get("/Frankenstein", (request, response) => {
   response.send(`It's alive! It's alive`);
 });

 app.get("/Rocky", (request, response) => {
   response.send("Yo, Adrian");
 });

 app.get("/Gollum", (request, response) => {
   response.send("My precious");
 });

 //Activity Magic 8 Ball
 app.get("/magic8", (request, response) => {
   response.send(`<h1>${randomResponse}</h1>`);
 });

//listen
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});