import React, { useEffect } from 'react';
import './Compose.css';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
// import io from 'https://socket.chat.leader.codes';
import socketIOClient from "socket.io-client";

export default function Compose(props) {
<<<<<<< HEAD
//   const socket = socketIOClient("https://socket.chat.leader.codes", { transports: ['websocket']});
=======
  // const socket = socketIOClient("https://socket.chat.leader.codes", { transports: ['websocket']});
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a
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
<<<<<<< HEAD
  
=======
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a
//       let username = "mindy";
     
//       let hangoutID = "318412160";

  
//       if (username != '' && username != undefined && hangoutID != '' && hangoutID != undefined) {
//            console.log("huu");
  
//           socket.emit('user', username, hangoutID);
//       } 
// },[])
 
<<<<<<< HEAD
//   // socket.on("connection", data => 
//   // {
//   //  //do function
//   // })
//   // let ioConect = 'https://socket.chat.leader.codes'
//   // let socket = io.connect(ioConect)
//   function sendMessage(){
  
//      socket.emit('send_message',$(".compose-input").val());
//      console.log(socket); 
// }
=======
  // socket.on("connection", data => 
  // {
  //  //do function
  // })
  // let ioConect = 'https://socket.chat.leader.codes'
  // let socket = io.connect(ioConect)
 
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a

    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
         
        />
<<<<<<< HEAD
       {/* <button onClick={sendMessage}>send</button> */}
=======
       
      
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a
        {
          
          props.rightItems
        }
      </div>
    );
}




