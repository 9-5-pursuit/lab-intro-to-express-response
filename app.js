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

//LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
