const {repsonse} = require("express");
const express = require("express")

const app = express();

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    //ONLY one "res.send" for every "app.get"
    // res.send("Hasta la vista, baby")
})

app.get("/Batman", (req, res)=>{
    res.send("To the batmoblie!")
})

app.get("/rocky", (req, res) =>{
    res.send("Yo, Adrian")
})

app.get("/jack-dawson", (req, res) => {
    res.send("I'm the king of the world!")
})

app.get("/frankenstein",(req, res) => {
    res.send("It's alive! It's alive!")
})

app.get("/jim-lovell", (req, res) =>{
    res.send("Houston, we have a problem")
})

app.get("/gollum", (req, res) => {
    res.send("My precious")
})

app.get("/tony-montana", (req, res) =>{
    res.send("Say hello to my little friend")
})

app.get("/rod-tidwell", (req, res) => {
    res.send("Show me the money!")
})

app.get("/traivs-bickle", (req, res) =>{
    res.send("You talkin' to me?")
})

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
    "Very doubtful"
  
  ]

function randomQuote () {
    // get length of array
    const length = magic8Responses.length;
    //that number will be ramonly picked here
    const randomNumber = Math.floor(Math.random() * length);

    app.get("/magic8", (req, res)=>{
        // the varibale acts like a number and the the array[index] format is how it works
        res.send(`<h1>this is a random quote: ${magic8Responses[randomNumber]}</h1>`)
    })
}
//call function
randomQuote()




module.exports = app;

