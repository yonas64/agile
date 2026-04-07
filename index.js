const express = require('express'); // Import Express
const app = express();               // Create an Express application
const port = 3000;                   // Define the port to listen on

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello Agile World!');           // Send the response "Hello World!"
});

// Start the server and listen for connections
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
