const express = require("express")


const app = express()
const PORT = 3003
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

app.get("/magic8ball", (req,res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
})
app.get("/", (req, res) => {
    res.send("hello, world!")
})
app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})
app.get("/emeril", (req,res) => {
    res.send("Bam!")
})

app.get("/steve_mcgarrett", (req,res) =>{
    res.send("Book 'em Danno!")
})
app.get("/coachtaylor", (req,res) => {
    res.send("Clear eyes, full hearts, can't Lose")
})


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})

module.exports = app