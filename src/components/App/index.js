import { Provider } from 'react-redux';
import { Socket } from 'socket.io-client';
import store from '../../redux/Stores/store';
import ContactList from '../ContactList';
import Messenger2 from '../Messenger2'
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import io from "socket.io-client";
const ENDPOINT2 = "http://127.0.0.1:4001"
const ENDPOINT = "http://chat.leader.codes:4000";
const SOCKET_SERVER_URL = "https://socket.chat.leader.codes"

export default function App() {
  const [response, setResponse] = useState("");


  // const socketRef = useRef();
  // useEffect(() => {
  //   debugger
  //   socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
  //     transports: ['websocket'],
  //     // query: { roomId },
  //     // connected: true,
  //     // disconnected: false
  //   });
  //   debugger

  //   socketRef.current.on('connect', () => {
  //     debugger
  //     console.log("arrive to connect");
  //     console.log(socketRef.current.id, "socket3", socketRef)
  //   });
  //   socketRef.current.emit('send_message', "uyuyuy")
  // }, [])

  return (
    <Provider store={store}>
      {/* <p>
        It's <time dateTime={response}>{response}</time>
      </p> */}
      <div className="App" >
        <Messenger2 />
      </div>
    </Provider>
  );
}

///////sockettttttttt
// import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
// import { subscribeToTimer } from '../../socket';

// // const ENDPOINT='https://localhost/4000'
//  function App() {
//   const [response, setResponse] = useState("");
// const ENDPOINT = 'https://socket.chat.leader.codes/';
// debugger;
// const socket = socketIOClient("https://socket.chat.leader.codes",{reconnection:false})

// //var socket = socketIOClient(ENDPOINT,{transports: ['websocket']});

//   useEffect(() => {
//   // socket = socketIOClient(ENDPOINT,{transports: ['websocket']});

//     debugger;
// // const socket = socketIOClient("https://socket.dev.leader.codes", { transports: ['websocket']});
//       // const socket = new WebSocket('ws://localhost:4000');

//       // Connection opened
//       // socket.addEventListener('open', function (event) {
//       //   debugger
//       //     socket.send('Hello Server!');
//       // });

//       // // Listen for messages
//       // socket.addEventListener('FromAPI1', function (event) {
//       //   debugger
//       //     console.log('Message from server ', event.data);
//       // });
//     //const socket = socketIOClient(ENDPOINT);
// //     debugger
// //     x();
// //     async function x(){  await  socket.on("connect", data => {
// //      console.log("data",data);
// // setResponse(data);
// //    });
// //   }
// socket.current.on("message", message => {
//   console.log(message);
//    // setMessages([...messages, message])
// })
//    socket.current.on("con", data => {
//      debugger
//     console.log("data",data);
// setResponse(data);
//   });
//   }, []);

//   function emitMessage(message) {
//     debugger
//     socket.current.emit('send_message', message);

//   //  $("#div_chat").scrollTop(10000);
// //$('#txt').val('');

// }
// emitMessage("hi")

// //   debugger
// //   socket.on("connect", data => {
// //     console.log("data",data);
// // setResponse(data);
// //   });
// //   socket.on("connection", data => {
// //     console.log("data",data);
// // setResponse(data);
// //   });


//   return (
//     <p>
//       It's <time dateTime={response}>{response}</time>
//     </p>
//   );
// }

// export default App;

