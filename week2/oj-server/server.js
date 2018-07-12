const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const mongoose = require('mongoose');

// app.get('/', (req, res) => res.send('Hello World!!!!!!'));

app.use('/api/v1', restRouter);


mongoose.connect('mongodb://Nicole-gym:nicole-gym123@ds235239.mlab.com:35239/problems');
app.listen(3000, () => console.log('Example app listening on port 3000!'));

