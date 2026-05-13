const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});