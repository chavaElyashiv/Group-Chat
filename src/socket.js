const express = require('express');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const moment = require('moment-timezone');
let Israeli_watch = moment().tz('Asia/Jerusalem').format('YYYY-MM-DD HH:mm ZZ');
moment.tz.setDefault("Asia/Jerusalem");
let location = "Asia/Jerusalem";
const io = require('socket.io')(http, { transports: ["websocket", 'polling'] });

const dotenv = require('dotenv');
const request = require("request");

const startSocket = () => {
    console.log("popopop");
    http.listen(3000, () => {
        console.log('socket io listening at port: 4000')
    })
    io.on('connection', function (socket) {

        socket.on('user', function (username, chatBox_Id) {

            socket.username = username;
            socket.chatBox_Id = chatBox_Id;
            socket.join(chatBox_Id)


            socket.broadcast.to(socket.chatBox_Id).emit('is_online', '<br> <i class="text-info small">' + username + ' join the chat</i>', 'join');
        });

        socket.on('disconnect', function (username, activated) {
            console.log("left chat!", activated);
            // saveMessage();
            socket.broadcast.to(socket.chatBox_Id).emit('is_online', '<br> <i class="text-danger small">' + socket.username + ' left the chat</i>', 'left');
        })
        socket.on('chat_message', function (message) {
            if (message != '') {
                socket.emit('chat_message', `<div class="chat__msg chat__msg_reply"  >
    
                <div class="chat__wrap">
                    <div class="chat__comment"style="background-color:rgb(139,141,139);">${message}</div>
                    <div class="chat__time">${moment().tz(location).format('HH:mm')} </div> </div></div>`);

                socket.broadcast.to(socket.chatBox_Id).emit('chat_message',
                    ` <div class="chat__msg">
                         <div class="chat__wrap">
                         <div class="chat__comment">${message}</div>
                       <div class="chat__time">${moment().tz(location).format('HH:mm')}</div>
                     </div></div>`)
            }



        });

        socket.on('send_message', function (message) {
            //debugger;
            console.log(message)

            if (message != '') {
                //debugger;
                socket.emit('save_msg', message, socket.username);

                socket.emit('send_message',
                    `<div class="chat__msg chat__msg_reply"  >
    
                        <div class="chat__wrap">
                            <div  id="msg" class="chat__comment"style="background-color:rgb(139,141,139);">${message}</div>
                            <div class="chat__time">${moment().tz(location).format('HH:mm')}${socket.username} </div> </div></div>`);

                socket.broadcast.to(socket.chatBox_Id).emit('send_message',
                    ` <div class="chat__msg">
                                 <div class="chat__wrap">
                                 <div class="chat__comment">${message}</div>
                               <div class="chat__time">${moment().tz(location).format('HH:mm')} ${socket.username}</div>
                             </div></div>`)
            }
        });
    });
}
module.exports = { startSocket };
