import React, { useEffect } from 'react';
import './Compose.css';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
// import io from 'https://socket.chat.leader.codes';
import socketIOClient from "socket.io-client";

export default function Compose(props) {
  // const socket = socketIOClient("https://socket.chat.leader.codes", { transports: ['websocket']});
// useEffect(()=>{
//   socket.on('send_message', function (msg) {

//     console.log("send", msg);
//     $('.compose-input').append($('<div>').html(msg+"111"));
//     // localStorageSave(msg);
//   });
  
//       // append text if someone is online
//       socket.on('is_online', function (msg, type) {
//           console.log(type);
          
         
//           if (type == 'left') {
//           }
  
//       });
//       let username = "mindy";
     
//       let hangoutID = "318412160";

  
//       if (username != '' && username != undefined && hangoutID != '' && hangoutID != undefined) {
//            console.log("huu");
  
//           socket.emit('user', username, hangoutID);
//       } 
// },[])
 
  // socket.on("connection", data => 
  // {
  //  //do function
  // })
  // let ioConect = 'https://socket.chat.leader.codes'
  // let socket = io.connect(ioConect)
 

    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
         
        />
       
      
        {
          
          props.rightItems
        }
      </div>
    );
}




