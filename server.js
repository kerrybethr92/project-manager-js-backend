const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json()); // use .json(), not .urlencoded()
app.use(cors())

const garmentsController = require('./controllers/projects.js');
app.use('/garments', garmentsController);

app.listen(3000, () => {
    console.log('listening on 3000');
});

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});
