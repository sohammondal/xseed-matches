require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();

//CORS
app.use(cors());
app.use(express.json());

//VIEW
app.use(express.static('client/build'))
app.use('*', (req, res) => res.sendFile(__dirname, 'client', 'build', 'index.html'));

module.exports = app;