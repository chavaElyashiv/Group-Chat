import React, { useEffect, useState, useRef, Component } from 'react';
import './Compose.css';
import $ from 'jquery';
import { actions } from '../../redux/Actions/actions'
import InputEmoji from "react-input-emoji";
import 'font-awesome/css/font-awesome.min.css';
import socketIOClient from "socket.io-client";
import { connect } from 'react-redux'
import { socketRef } from "../../socket";
import { render } from 'react-dom';



function mapStateToProps(state) {
    return {
        // messageInput: state.messageInput,
        userName: state.userReducer.userName,
        hangout: state.hangoutReducer.hangout
    }
}


const mapDispatchToProps = (dispatch) => ({
    SetMessageInput: (messageInput) =>
        dispatch(actions.setMessageInput(messageInput)),
    addNewWave: (wave) => dispatch(actions.addNewWave(wave)),
    addWaveLocal: (wave, hangout) => dispatch(actions.addWave({ wave: wave, hangout: hangout })),
    //getCurrentHangoutID to handle it!!
    getCurrentHangoutID: () => dispatch(actions.getCurrentHangoutID())
})

export default connect(mapStateToProps, mapDispatchToProps)(function Compose2(props) {
    // const { hangout } = props;
    const { addNewWave, addWaveLocal, userName, getCurrentHangoutID } = props;
    const [message1, setMessage1] = useState("");


    // const SOCKET_SERVER_URL = "https://socket.chat.leader.codes"

    // const socketRef = useRef();
    // const socketRef = useRef(socketRef);

    useEffect(() => {
        debugger
        socketRef.emit('user', props.userName, props.hangout, (response) => {
            console.log(response.status); // ok
        })

        // socketRef.emit('connection', socketRef)

    }, props.hangout)
    useEffect(() => {
        socketRef.on('connect', (message) => {
            debugger
            console.log("someone connected");
            // var h = await getCurrentHangoutID();
            // var h = props.hangout;
            // // componentDidUpdate()
            // console.log("props.hangout", props.hangout);
            // if (props.hangout != null) {
            //     debugger
            //     console.log("props.userName", props.userName);
            //     console.log("props.hangout", props.hangout);
            //     // socketRef.emit('user', props.userName, props.hangout)
            //         socketRef.emit('user', props.userName, props.hangout)

            //     //     console.log("message", message);
            // }

        });

        // componentDidUpdate(){
        //     console.log("props.hangout", props.hangout);

        // }
        // socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
        //     transports: ['websocket'],

        // });
        socketRef.on('message', (message, from, hangout) => {

            debugger
            //    if (hangout === props.hangout) {
            let wave = {
                body: message,
                from: from
            }
            addWaveLocal(wave, hangout)
            debugger

            console.log("message", message);
            //    }




            debugger

        })
        socketRef.on('is_online', (message) => {
            console.log("is_online", message);
        })
        // socketRef.on('connect', (message) => {
        //     // componentDidUpdate()
        //     console.log("props.hangout", props.hangout);
        //     if (props.hangout != null) {
        //         debugger
        //         console.log("props.userName", props.userName);
        //         console.log("props.hangout", props.hangout);
        //         // socketRef.emit('user', props.userName, props.hangout)
        //         socketRef.emit('user', props.userName, props.hangout)

        //         //     console.log("message", message);
        //     }
        ////till here

        // });
        // socketRef.emit('user', props.userName, props.hangout)
        socketRef.on('new member', (data) => {
            console.log("new member", data);

        })

    }, [])



    function emitMessage(message) {
        debugger

        //   if (!socketRef.current || socketRef.current.readyState !== 1) return;
        socketRef.emit('send_message', message, userName, props.hangout);
        const wave = {
            body: message,
            from: userName
        }
        addNewWave(wave)

    }
    function onEnter(e) {
        if (e.key === 'Enter') {
            emitMessage(e.target.value);
            //   setMessage1(e.target.value)
        }
    }

    return (
        <div className="compose">

            <input
                className="compose-input"
                id="inputVal"
                type="text"
                // onEnter={(value) => handleOnChange(value)}
                //  value={props.messageInput}
                //   value={message}
                //  onChange={setText, handleOnChange}
                onChange={(e) => { setMessage1(e.target.value) }}
                //   onEnter={(e) => { setMessage(e.target.value) }}
                //cleanOnEnter
                //   onKeyDown={(e) => { onEnter(e) }}
                //    onChange={handleNewMessageChange}
                placeholder="Write message..."
            // onEnter={sendMessage}
            // placeholder="Type a message"
            />
            {
                props.rightItems
            }
            <button onClick={() => { emitMessage(message1) }} className="send-message-button">
                Send
      </button>
        </div>
    );
})




