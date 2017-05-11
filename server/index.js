// Main starting point of apllication
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://aric.sangchat:dontstop636@ds137271.mlab.com:37271/auth_tut');

// App Setup
app.use(morgan('combined')); // logging framework
app.use(bodyParser.json({ type: '*/*' })); // middleware to parse incoming requests into json no matter what the type is, any request incoming will be parsed as json
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
