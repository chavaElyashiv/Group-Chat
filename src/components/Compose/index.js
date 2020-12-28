import React, { useEffect, useState } from 'react';
import './Compose.css';
import $ from 'jquery';
import { actions } from '../../redux/Actions/actions'
import InputEmoji from "react-input-emoji";
import 'font-awesome/css/font-awesome.min.css';
// import io from 'https://socket.chat.leader.codes';
import socketIOClient from "socket.io-client";
import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    messageInput:state.messageInput
  }

}


const mapDispatchToProps = (dispatch) => ({
  SetMessageInput: (messageInput) =>
    dispatch(actions.setMessageInput(messageInput)),

})

export default connect(mapStateToProps,mapDispatchToProps)( function Compose(props) {

  const [text, setText] = useState("");
 
  function handleOnChange(text) {
    // console.log("enter", text);
    props.SetMessageInput(text)
  }
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
  
    // document.getElementById('inputVal').value=''
    // document.getElementById('inputVal').placeholder= e.target.value
    // props.setEmoji(e.key)
  
 
    return (
      <div className="compose">
    <InputEmoji
    className="compose-input"
     id="inputVal"
      value={props.messageInput}
      onChange={setText,handleOnChange}
      // onChange={()=>{setText(); loger()}}
      cleanOnEnter
      onEnter={handleOnChange}
      placeholder="Type a message"
    />
        {/* <input
        id="inputVal"
          type="text"
          onKeyUp={(e)=>changeVal(e)}
          className="compose-input"
          // placeholder={props.currentEmoji}
          value={props.currentEmoji?props.currentEmoji:inputValue}
        /> */}
        {  
          props.rightItems
        }

      </div>
    );
})




