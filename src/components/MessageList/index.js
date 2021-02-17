import React, { useEffect, useState, useRef } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';

import $ from 'jquery';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { connect } from 'react-redux';
import './MessageList.css';
import { actions } from '../../redux/Actions/actions'
import ContactList from '../ContactList/index'
import ConversationSearch from '../ConversationSearch/index'
import io from "socket.io-client";
import MembersList from '../MembersList/index';
import NewHangout from '../NewHangout/index';
import { Icon, InlineIcon } from '@iconify/react';
import accountMultiplePlus from '@iconify-icons/mdi/account-multiple-plus';

function mapStateToProps(state) {
  return {
    userName: state.userReducer.userName,
    stateConversation: state.hangoutReducer.listConvesation,
    showContactList: state.contactsReducer.showContactList,
    showMembersList: state.hangoutReducer.showMembersList,
    messageInput: state.hangoutReducer.messageInput,
    showNewHangout: state.hangoutReducer.showNewHangout,
    showMessagesList: state.hangoutReducer.showMessagesList,
    filteredMessages: state.filteredListReducer.filteredMessages,
    listConvesation: state.hangoutReducer.listConvesation
    //  filteredContacts:state.filteredContacts
  }

}
const mapDispatchToProps = (dispatch) => ({
  setCurrentConversation: (conversation) => dispatch(actions.setConversation(conversation)),

  SetMessageInput: (messageInput) =>
    dispatch(actions.setMessageInput(messageInput)),
  showMembers: () => dispatch(actions.setShow("members")),
  addNewWave: (wave) => dispatch(actions.addNewWave(wave))



})
const MY_USER_ID = 'apple';
export default connect(mapStateToProps, mapDispatchToProps)(function MessageList(props) {

  const ENDPOINT = 'https://socket.chat.leader.codes';
  const messages = props.filteredMessages;
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    //messagesEndRef.current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  const { showMessagesList, showNewHangout, stateConversation, setCurrentConversation, showContactList, showContact, showMembersList, showMembers } = props;

  let socket;
  // let list;
  // let kindList;
  const [messages2, setMessages] = useState([])
  const [showMyComponent, setShowMyComponent] = useState(false)

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');

  // $('.emojiButton').click(function(){
  //   debugger;
  //   console.log("emoji");
  // })
  useEffect(() => {

    //     const name = "mindy"
    //     const room = 210
    //     socket = io(ENDPOINT, { transports: ['websocket'] });
    //     socket.emit('user', name, room);
    //     socket.on('chat_message', message => {
    //       $(".compose-input").val("helllo")
    //       console.log("emitt");
    //       setMessages(msgs => [...msgs, message]);
    //     });

    //     socket.on("roomData", ({ users }) => {
    //       setUsers(users);
    //     });
    //   }, []);
    // =======

  }, [props.listConvesation])
  // useEffect(() => {
  //   const name = "mindy"
  //   const room = 210
  //   socket = io(ENDPOINT,{transports:['websocket']});
  //   socket.emit('user', name, room);
  //   socket.on('chat_message', message => {
  //     $(".compose-input").val("helllo")
  //     console.log("emitt");
  //     setMessages(msgs => [...msgs, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //   setUsers(users);
  //   });
  // }, []);

  const sendMessage = (event) => {
    const wave = {
      body: props.messageInput,
      from: props.userName
    }
    event.preventDefault();
    console.log(socket);
    console.log("message to send" + props.messageInput);
    if (props.messageInput) {
      debugger
      props.addNewWave(wave)
      props.SetMessageInput("")
      // socket.emit('chat_message', props.messageInput);

    }
  }





  const renderMessages = () => {
    console.log("messages", messages);
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      if (messages[i].body) {
        let previous = messages[i - 1];
        let current = messages[i];
        let next = messages[i + 1];

        let currentMoment = moment(current.timestamp);
        let prevBySameAuthor = false;
        let nextBySameAuthor = false;
        let startsSequence = true;
        let endsSequence = true;
        let showTimestamp = true;

        if (previous) {
          let previousMoment = moment(previous.timestamp);
          let previousDuration = moment.duration(currentMoment.diff(previousMoment));


          if (previousDuration.as('hours') < 1) {
            startsSequence = false;
          }

          if (previousDuration.as('hours') < 1) {
            showTimestamp = false;
          }
        }

        if (next) {
          let nextMoment = moment(next.timestamp);
          let nextDuration = moment.duration(nextMoment.diff(currentMoment));
          nextBySameAuthor = next.author === current.author;

          if (nextBySameAuthor && nextDuration.as('hours') < 1) {
            endsSequence = false;
          }
        }
        tempMessages.push(

          <Message
            // messages={messages}
            //  name={name} 
            key={i}

            startsSequence={startsSequence}
            endsSequence={endsSequence}
            showTimestamp={showTimestamp}
            data={current}
          />
        );
      }

      i += 1;

    }

    return tempMessages;
  }

  function h() {
    showMembers()
  }



  return (
    <div class="container-fluid p-0 message-list">
      <div class="row">
        <div class="col">
          {showMessagesList || showMembersList || showContactList ? <Toolbar
            title={showMessagesList ? "Conversation Title" : ""}
            rightItems={[
              // {/* <ToolbarButton key="123e" icon="ion-ios-person-add-sharp" /> */}

              // {/* <span class="iconify" data-icon="ion:person-add-sharp" data-inline="false"></span> */}

              <>  <Icon key="pop" className="tool" icon={accountMultiplePlus} onClick={h} />

                <ToolbarButton key="video" icon="ion-ios-videocam" />
                <ToolbarButton key="phone" icon="ion-ios-call" />
              </>


            ]}
          /> : ''}
        </div>
      </div>
      <div class="row">
        <div class="col">
          {showMessagesList ? <ConversationSearch list={stateConversation} kindList="filteredMessages" /> : ''}

        </div>
      </div>
      <div class="row scrollable ">
        <div class="col message-list-container">
          {showMessagesList ? renderMessages() : ''}
          {showMembersList ? <MembersList /> : ''}
          {showContactList ? <ContactList /> : ''}
          {showNewHangout ? <NewHangout /> : ''}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div class="row">
        {showMessagesList ? <Compose
        // rightItems={[
        //<button className="sendButton" onClick={(e) => sendMessage(e)}><div><i className="fa fa-paper-plane" /></div></button>,
        // <ToolbarButton key="photo" icon="ion-ios-camera" />,
        // <ToolbarButton key="image" icon="ion-ios-image" />,
        // <ToolbarButton key="audio" icon="ion-ios-mic" />,
        // <ToolbarButton key="money" icon="ion-ios-card" />,
        // <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
        // <ToolbarButton key="emoji" icon="ion-ios-happy" />
        // ]} 
        /> : ''}
      </div>
    </div>
  );
})
