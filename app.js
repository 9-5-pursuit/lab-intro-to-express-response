const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.status(418).send("Hello, world!");
});
app.get("/tim-gunn", (request, response) => {
    response.send("Make it work");
});
app.get("/coach-taylor", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose");
});
app.get("/steve-mcgarrett", (request, response) => {
    response.send("Book 'em Danno!");
});
app.get("/harry-callahan", (request, response) => {
    response.send("Go ahead, make my day");
});
app.get("/zeus", (request, response) => {
    response.send("Release the Kraken");
});
app.get("/rod-tidwell", (request, response) => {
    response.send("Show me the money!");
});
app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive");
});
app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian");
});
app.get("/gollum", (request, response) => {
    response.send("My precious");
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

    let magic8Answer =
        magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

    response.send(`<h1>${magic8Answer}</h1>`);
});

module.exports = app;
