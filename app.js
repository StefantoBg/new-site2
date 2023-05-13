const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Serve static files from the public directory
app.use(express.static('./'));

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Handle form submission
app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Save the form data to a file
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
  fs.appendFile('form-data.txt', data, (err) => {
    if (err) throw err;
    console.log('Form data saved to file');
  });

  // Send a response to the client
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
