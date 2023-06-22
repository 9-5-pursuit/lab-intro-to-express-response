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

function getRandomAnswer() {
  //Math.random returns a decimal number between 0 and 1
  //Generates a random index using Math.random() multiplied by the length of the magic8Responses array. 
  //The Math.floor() function is used to check that the index is an integer within the valid range of array indices.
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  
  //Returns the randomly selected answer from the magic8Responses array using the random index.
  return magic8Responses[randomIndex];
};

 app.get("/magic8", (req, res) => {
    const magic8Answer = getRandomAnswer();
   res.send(`<h1>${magic8Answer}</h1>`);
 });

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
