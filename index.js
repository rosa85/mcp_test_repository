const express = require('express');
const app = express();
const port = 3000;

let unusedVariable = 'this is not used';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/error', (req, res) => {
  // Logical error: dividing by zero
  let result = 10 / 0;
  res.send('This will cause an error: ' + result);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  // Syntax error: missing closing bracket
  console.log('This is fine');
