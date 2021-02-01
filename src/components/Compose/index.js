// import React, { useEffect, useState, useRef } from 'react';
// import './Compose.css';
// import $ from 'jquery';
// import { actions } from '../../redux/Actions/actions'
// import InputEmoji from "react-input-emoji";
// import 'font-awesome/css/font-awesome.min.css';
// // import io from 'https://socket.chat.leader.codes';
// import socketIOClient from "socket.io-client";
// import { connect } from 'react-redux'
// // import useChat from "../UseChat/index";

// function mapStateToProps(state) {
//   return {
//     messageInput: state.messageInput,
//     userName: state.userName,
//     hangout: state.hangout

//   }
// }


// const mapDispatchToProps = (dispatch) => ({
//   SetMessageInput: (messageInput) =>
//     dispatch(actions.setMessageInput(messageInput)),
//   addNewWave: (wave) => dispatch(actions.addNewWave(wave))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(function Compose(props) {
//   debugger
//   //while (props.hangout == undefined) {
//   //  const { roomId } = props.hangout; // Gets roomId from URL

//   const { messages, sendMessage } = useChat(props.hangout); // Creates a websocket and manages messaging
//   // }
//   const [newMessage, setNewMessage] = React.useState(""); // Message to be sent


//   const { userName, hangout } = props;
//   const [text, setText] = useState("");

//   const handleNewMessageChange = (event) => {
//     debugger
//     setNewMessage(event.target.value);
//   };

//   const handleSendMessage = () => {
//     sendMessage(newMessage);
//     setNewMessage("");
//   };
//   function handleOnChange(value) {

//     // if (e.key === "Enter") {
//     debugger
//     setText(value)
//     // props.SetMessageInput(text)
//     socketRef.current.emit('sendMessage', value)
//     // }

//     // console.log("enter", text);


//   }
//   // function sendMessage(text) {
//   //   const wave = {
//   //     body: text,
//   //     from: props.userName
//   //   }
//   //   props.addNewWave(wave)
//   // }
//   const SOCKET_SERVER_URL = "https://socket.chat.leader.codes"

//   const socketRef = useRef();
//   // useEffect(() => {
//   //   debugger

//   //   if (props.hangout != null) {
//   //     const { messages, sendMessage } = useChat(props.hangout);
//   //   }
//   // }, [props.hangout])


//   useEffect(() => {
//     debugger
//     socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
//       transports: ['websocket'],
//       // query: { roomId },
//       // connected: true,
//       // disconnected: false
//     });
//     debugger

//     socketRef.current.on('connect', () => {
//       debugger
//       socketRef.current.emit('user', userName, hangout);
//       console.log("arrive to connect");
//       console.log(socketRef.current.id, "socket3", socketRef)
//       socketRef.current.emit('sendMessage', "uyuyuy")
//     });
//     debugger

//     socketRef.current.on('Message', function (message) {
//       debugger
//       setText(message);
//     })

//   }, [])



//   function emitMessage(message) {
//     socketRef.current.emit('send_message', message);

//   }
//   //  useEffect(() => {
//   // if(props.messageInput=="")
//   //    $('#inputVal').val("")
//   // }, [props.messageInput]);
//   // const socket = socketIOClient("https://socket.chat.leader.codes", { transports: ['websocket']});
//   // useEffect(()=>{
//   //   socket.on('send_message', function (msg) {

//   //     console.log("send", msg);
//   //     $('.compose-input').append($('<div>').html(msg+"111"));
//   //     // localStorageSave(msg);
//   //   });

//   //       // append text if someone is online
//   //       socket.on('is_online', function (msg, type) {
//   //           console.log(type);


//   //           if (type == 'left') {
//   //           }

//   //       });
//   //       let username = "mindy";

//   //       let hangoutID = "318412160";


//   //       if (username != '' && username != undefined && hangoutID != '' && hangoutID != undefined) {
//   //            console.log("huu");

//   //           socket.emit('user', username, hangoutID);
//   //       } 
//   // },[])

//   // socket.on("connection", data => 
//   // {
//   //  //do function
//   // })
//   // let ioConect = 'https://socket.chat.leader.codes'
//   // let socket = io.connect(ioConect)

//   // document.getElementById('inputVal').value=''
//   // document.getElementById('inputVal').placeholder= e.target.value
//   // props.setEmoji(e.key)


//   return (
//     <div className="compose">
//       {/* <InputEmoji */}
//       <input
//         className="compose-input"
//         id="inputVal"
//         type="text"
//         // onEnter={(value) => handleOnChange(value)}
//         //  value={props.messageInput}
//         value={newMessage}
//         //  onChange={setText, handleOnChange}
//         // onChange={()=>{setText(); loger()}}
//         cleanOnEnter
//         onChange={handleNewMessageChange}
//         placeholder="Write message..."
//         // onEnter={sendMessage}
//         placeholder="Type a message"
//       />
//       {/* <input
//         id="inputVal"
//           type="text"
//           onKeyUp={(e)=>changeVal(e)}
//           className="compose-input"
//           // placeholder={props.currentEmoji}
//           value={props.currentEmoji?props.currentEmoji:inputValue}
//         /> */}
//       {
//         props.rightItems
//       }
//       <button onClick={handleSendMessage} className="send-message-button">
//         Send
//       </button>
//     </div>
//   );
// })




