//
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

//settings
app.use(cors ());
const port = 3500;


//DATABASE connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trs',
    port: 3306,
});
const db = pool.promise();

//ENDPOINTS

app.listen(port);