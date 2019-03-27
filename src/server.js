const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen(8000, ()=>{
    console.log('Server started on local host 8000')
})

const con = mysql.createConnection({
    host:'localhost',
    user: "root",
    password: "root"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Mysql connected");
})