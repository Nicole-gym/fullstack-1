const express = require('express');
const app = express();
const path = require('path');

const http = require('http');

var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

const restRouter = require('./routes/rest');
const mongoose = require('mongoose');

// app.get('/', (req, res) => res.send('Hello World!!!!!!'));

app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, '../public/')));

app.use((req, res)=>{
	res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
})

mongoose.connect('mongodb://Nicole-gym:nicole-gym123@ds235239.mlab.com:35239/problems',{ useNewUrlParser: true });
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
  console.log('Example app listening on port 3000!');
}