//DEPENDENCIES
const express = require('express');

//CONFIGURATION
const app = express();
const PORT = 3001;

// ROUTES

app.get('/', (request, response) => {
    response.send('Hellooo World!!!')
})

app.get('/terminator', (request, response) => {
    response.send("I'll be back");
})

app.get('/terminator2', (request, response) => {
    response.send('Hasta la vista, baby');
})

app.get('/Homer-Simpson', (request, response) => {
    response.send("D'Oh!")
})

app.get('/Batman', (request, response) => {
    response.send("To the Batmobile!")
})

app.get('/Frankenstein', (request, response) => {
    response.send("It's Alive, It's Alive!")
})

app.get('/Bruce-Banner', (request, response) => {
    response.send("Don't make me angry")
})

app.get('/Zeus', (request, response) => {
    response.send("Release the kraken")
})

app.get('/Rocky', (request, response) => {
    response.send("Yo, Adrian")
})

app.get('/James-Bond', (request, response) => {
    response.send("The name is bond, James Bond")
})

app.get('/Rod-Tidwell', (request, response) => {
    response.send("Show me the money!")
})

app.get('/Travis-Bickle', (request, response) => {
    response.send("You talkin' to me?")
})


app.get('/magic8', (request, response) => {
    response.send(`<h1>${magic8Answer()}</h1>`);
})

//FUNCTION

function magic8Answer(){

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

    let randomNumber = Math.floor(Math.random() * magic8Responses.length);

    return magic8Responses[randomNumber];
}


//LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})