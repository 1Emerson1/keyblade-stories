"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = "jekingdom"

const app = express();
const router = express.Router();

app.use(cors())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

const db = mysql.createConnection({
    host:"mysql.story.mychatbot.xyz",
    user: "story_db_user",
    password: "Key12$34$",
    database: "story_db"
});
 
db.connect(function(err) {
    if (err) throw err;
    else{
      console.log("Connected to the mysql database");
    }
    /*con.query("SELECT * FROM User", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    */
  });
 
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method')
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

 