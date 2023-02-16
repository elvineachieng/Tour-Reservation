//
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

//settings
app.use(cors ());
const port = 3500;

app.listen(port);