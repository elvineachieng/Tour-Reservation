//
const express = require('express');
const cors = require('cors');

const app = express();

//settings
app.use(cors ());
const port = 3500;

app.listen(port);