const express = require('express');
const mysql = require('mysql');


const con = mysql.createConnection({
    host:"mysql.story.mychatbot.xyz",
    user: "story_db_user",
    password: "Key12$34$",
    database: "story_db"
});
 
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM User", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
 

 