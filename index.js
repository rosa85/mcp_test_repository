const express = require('express');
const app = express();
const port = 3000;

let unusedVariable = 'this is not used';

const dbPassword = 'superSecretPassword123';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/error', (req, res) => {
  let result = 10 / 0;
  res.send('This will cause an error: ' + result);
});

app.get('/exec', (req, res) => {
  const { cmd } = req.query;
  const { exec } = require('child_process');
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      res.send('Error: ' + err.message);
      return;
    }
    res.send(stdout);
  });
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  console.log('This is fine');
