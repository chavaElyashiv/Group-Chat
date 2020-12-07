

import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { connect } from 'react-redux';
import './MessageList.css';
import { actions } from '../../redux/Actions/actions'
import ContactList from '../ContactList/index'
import { AiOutlineUserAdd } from "react-icons/ai";
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon, InlineIcon } from '@iconify/react';
import accountMultiplePlus from '@iconify-icons/mdi/account-multiple-plus';


function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,
    showContactList:state.showContactList
  }

}
const mapDispatchToProps = (dispatch) => ({
  setCurrentConversation: (conversation) => dispatch(actions.setConversation(conversation)),
    showContact:()=>dispatch(actions.setShowContactList()),


})

const MY_USER_ID = 'apple';

export default connect(mapStateToProps, mapDispatchToProps)(function MessageList(props) {
  const messages = props.stateConversation;

  const { stateConversation, setCurrentConversation ,showContactList,showContact} = props;

  const [messages2, setMessages] = useState([])

  // useEffect(() => {

  //   getMessages();
  // }, [stateConversation])


  const getMessages = () => {

    console.log("con", stateConversation);


    // setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    console.log("messages", messages);
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      if (messages[i].body) {

        // console.log(messages[i].body);
        let previous = messages[i - 1];
        let current = messages[i];
        let next = messages[i + 1];
        // //let isMine = current.author === MY_USER_ID;
        let currentMoment = moment(current.timestamp);
        let prevBySameAuthor = false;
        let nextBySameAuthor = false;
        let startsSequence = true;
        let endsSequence = true;
        let showTimestamp = true;

        if (previous) {
          let previousMoment = moment(previous.timestamp);
          let previousDuration = moment.duration(currentMoment.diff(previousMoment));
          // prevBySameAuthor = previous.author === current.author;

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
            key={i}
            //  isMine={isMine}
            startsSequence={startsSequence}
            endsSequence={endsSequence}
            showTimestamp={showTimestamp}
            data={current}
          />
        );
      }
      // Proceed to the next message.
      i += 1;

    }

    return tempMessages;
  }
  function h() {
    showContact(!showContactList)
  }
  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[ 
            // {/* <ToolbarButton key="123e" icon="ion-ios-person-add-sharp" /> */}

        // {/* <span class="iconify" data-icon="ion:person-add-sharp" data-inline="false"></span> */}
 
      <>  <Icon key="pop" className="tool" icon={accountMultiplePlus} onClick={h} />
     
          <ToolbarButton key="video" icon="ion-ios-videocam" />
          <ToolbarButton key="phone" icon="ion-ios-call" />
          </>
       
          
        ]}
      />
      {/* <AiOutlineUserAdd/> */}
     

      <div className="message-list-container">{showContactList ? <ContactList/>: renderMessages()}</div>

      <Compose rightItems={[
        <ToolbarButton key="photo" icon="ion-ios-camera" />,
        <ToolbarButton key="image" icon="ion-ios-image" />,
        <ToolbarButton key="audio" icon="ion-ios-mic" />,
        <ToolbarButton key="money" icon="ion-ios-card" />,
        <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
        <ToolbarButton key="emoji" icon="ion-ios-happy" />
      ]} />
    </div>
  );
})
