// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
const PORT = 3003;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
