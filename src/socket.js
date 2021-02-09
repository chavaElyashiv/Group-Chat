
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "https://socket.chat.leader.codes"
export const socketRef = socketIOClient(SOCKET_SERVER_URL, { transports: ['websocket'] });




// const express = require('express');
// const app = express();
// const http = require('http').Server(app);
// // const io = require('socket.io')(http);
// const moment = require('moment-timezone');
// let Israeli_watch = moment().tz('Asia/Jerusalem').format('YYYY-MM-DD HH:mm ZZ');
// moment.tz.setDefault("Asia/Jerusalem");
// let location = "Asia/Jerusalem";
// const io = require('socket.io')(http, { transports: ["websocket", 'polling'] });

// const dotenv = require('dotenv');
// const request = require("request");

// const startSocket = () => {
//     console.log("popopop");
//     http.listen(3000, () => {
//         console.log('socket io listening at port: 4000')
//     })
//     io.on('connection', function (socket) {

//         socket.on('user', function (username, chatBox_Id) {

//             socket.username = username;
//             socket.chatBox_Id = chatBox_Id;
//             socket.join(chatBox_Id)

// const port = process.env.PORT || 4001;
// const index = require("./routes/index");

//             socket.broadcast.to(socket.chatBox_Id).emit('is_online', '<br> <i class="text-info small">' + username + ' join the chat</i>', 'join');
//         });

//         socket.on('disconnect', function (username, activated) {
//             console.log("left chat!", activated);
//             // saveMessage();
//             socket.broadcast.to(socket.chatBox_Id).emit('is_online', '<br> <i class="text-danger small">' + socket.username + ' left the chat</i>', 'left');
//         })
//         socket.on('chat_message', function (message) {
//             if (message != '') {
//                 socket.emit('chat_message', `<div class="chat__msg chat__msg_reply"  >

//                 <div class="chat__wrap">
//                     <div class="chat__comment"style="background-color:rgb(139,141,139);">${message}</div>
//                     <div class="chat__time">${moment().tz(location).format('HH:mm')} </div> </div></div>`);

//                 socket.broadcast.to(socket.chatBox_Id).emit('chat_message',
//                     ` <div class="chat__msg">
//                          <div class="chat__wrap">
//                          <div class="chat__comment">${message}</div>
//                        <div class="chat__time">${moment().tz(location).format('HH:mm')}</div>
//                      </div></div>`)
//             }


// const server = http.createServer(app);

//         });

//         socket.on('send_message', function (message) {
//             //debugger;
//             console.log(message)

//             if (message != '') {
//                 //debugger;
//                 socket.emit('save_msg', message, socket.username);

//                 socket.emit('send_message',
//                     `<div class="chat__msg chat__msg_reply"  >

//                         <div class="chat__wrap">
//                             <div  id="msg" class="chat__comment"style="background-color:rgb(139,141,139);">${message}</div>
//                             <div class="chat__time">${moment().tz(location).format('HH:mm')}${socket.username} </div> </div></div>`);

//                 socket.broadcast.to(socket.chatBox_Id).emit('send_message',
//                     ` <div class="chat__msg">
//                                  <div class="chat__wrap">
//                                  <div class="chat__comment">${message}</div>
//                                <div class="chat__time">${moment().tz(location).format('HH:mm')} ${socket.username}</div>
//                              </div></div>`)
//             }
//         });
//     });
// }
// module.exports = { startSocket };
// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const port = process.env.PORT || 4000;
// //const index = require("../routes/index");

// const app = express();
// //app.use(index);

// const server = http.createServer(app);

// const io = socketIo(server);

// let interval;

// io.on("connection", (socket) => {
//     console.log("New client connected", socket.handshake.headers.origin);
//     if (interval) {
//         console.log("interval");
//         clearInterval(interval);
//     }
//     interval = setInterval(() => getApiAndEmit(socket), 1000);
//     // socket.on("disconnect", () => {
//     //     console.log("Client disconnected");
//     //     clearInterval(interval);
//     // });
//     socket.on('FromAPI1', function (message) {
//         console.log("hello", message)
//         socket.emit('Message', message)
//     });
// });

// const getApiAndEmit = socket => {
//     const response = new Date();
//     // Emitting a new message. Will be consumed by the client
//     socket.emit("FromAPI", response);
//     console.log("emit FromAPI");
// };

// server.listen(port, () => console.log(`Listening on port ${port}!!!`));

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:8000');
// function subscribeToTimer(cb) {
//     socket.on('timer', timestamp => cb(null, timestamp));
//     socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };
