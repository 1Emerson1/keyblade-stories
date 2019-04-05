/*
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Body parser that parses the json stream
app.use(bodyParser.json());

//Port
const port = 3200;

app.get('/', (req, res) => {
    return res.send("Received a GET HTTP method")
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method')
})

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method')
})

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method')
})

app.listen(port, () => {
  console.log("Server running on port "+port);
 });
 */