// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
const PORT = 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
