var express = require('express');
var app = express();
const mongoose = require('mongoose');
const message =  require('./router')
const bodyParser = require('body-parser');
var userId = 1;

const db = 'mongodb://olehDb:olehdb2607@ds217351.mlab.com:17351/heroku_dhcdb55v'

mongoose
.connect(db)
.then(() => console.log('DB connected'))
.catch(err => console.log(err));


app.use(bodyParser.json());
app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      next();
});
app.use('/api/messages', message);
const port = process.env.PORT || 8080;

server =  app.listen(port, function(){
      console.log(`server is running on port ${port}`);
})

app.use(express.static('client/build'));

var socket = require('socket.io');
io = socket(server);

// getDate = function() {

//       var date = new Date();
    
//       var hour = date.getHours();
//       hour = (hour < 10 ? "0" : "") + hour;
    
//       var min  = date.getMinutes();
//       min = (min < 10 ? "0" : "") + min;

//       var second = date.getSeconds();
//       second = (second < 10 ? "0" : "") + second;
    
//       return hour + ":" + min + ":" + second;
//     }

var userCount = 0;

io.on('connection', (socket) => {
      let leftUser = ''; 

      socket.on('user:request', function(user) {
            userCount = userCount < 0 ? 0 : userCount;
            ++userCount;
            ++userId;
            leftUser = user;
            socket.emit('user:accept', { id : userId, user, users : userCount });
            socket.broadcast.emit('user:join', userCount, user);
      });
        
      socket.on('send:message', function(msg) {
            msg.time = new Date();
            socket.emit('send:message', msg);
            socket.broadcast.emit('send:message', msg);
      });
      
      socket.on('disconnect', function(msg) {
            --userCount;
            socket.broadcast.emit('user:left', userCount, leftUser);
      })
})

const path = require('path');
app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../clent', 'build', 'index.html'))
})