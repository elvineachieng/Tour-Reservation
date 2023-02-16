//
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const { request } = require('http');

const app = express();

//settings
app.use(cors ());
app.use(express.json());
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
const admin = express.Router();
admin.post('/login', (req, res) => {
    const sql = 
    `SELECT * FROM admin WHERE username='${req.body.username}'`;
    db.query(sql)
    .then( rows => {
        if(rows[0]);
        res.json(rows[0]);
    })
    .catch(err => {
        res.status(404).json({
            error: err.message,
        })
    })
    //console.log(req.body);
})

app.use('/admin', admin);

app.listen(port);