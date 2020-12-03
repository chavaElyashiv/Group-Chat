import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { connect } from 'react-redux';
import './MessageList.css';
import { actions } from '../../redux/Actions/actions'

function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,
  }

}
const mapDispatchToProps = (dispatch) => ({
  setCurrentConversation: (conversation) =>
    dispatch(actions.setConversation(conversation)),

})

const MY_USER_ID = 'apple';

export default connect(mapStateToProps, mapDispatchToProps)(function MessageList(props) {
  const messages = props.stateConversation;

  const { stateConversation, setCurrentConversation } = props;

  const [messages2, setMessages] = useState([])

  // useEffect(() => {

  //   getMessages();
  // }, [stateConversation])


  const getMessages = () => {

    console.log("con", stateConversation);
    

    // setMessages([...messages, ...tempMessages])
  }

  const renderMessages = () => {
    debugger;
    console.log("messages", messages);
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      // debugger
      if (messages[i].body) {

        // console.log(messages[i].body);
        // let previous = messages[i - 1];
       let current = messages[i];
        // let next = messages[i + 1];
        // //let isMine = current.author === MY_USER_ID;
        // let currentMoment = moment(current.timestamp);
        // // let prevBySameAuthor = false;
        // let nextBySameAuthor = false;
        // let startsSequence = true;
        // let endsSequence = true;
        // let showTimestamp = true;

        // if (previous) {
        //   let previousMoment = moment(previous.timestamp);
        //   let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        //   // prevBySameAuthor = previous.author === current.author;

        //   if (previousDuration.as('hours') < 1) {
        //     startsSequence = false;
        //   }

        //   if (previousDuration.as('hours') < 1) {
        //     showTimestamp = false;
        //   }
        // }

        // if (next) {
        //   let nextMoment = moment(next.timestamp);
        //   let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        //   nextBySameAuthor = next.author === current.author;

        //   if (nextBySameAuthor && nextDuration.as('hours') < 1) {
        //     endsSequence = false;
        //   }
       // }
        debugger;
        tempMessages.push(

          <Message
            // key={i}
            // //  isMine={isMine}
            // startsSequence={startsSequence}
            // endsSequence={endsSequence}
            // showTimestamp={showTimestamp}
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
    debugger;
    alert("you clicked")
  }
  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton key="info" icon="ion-ios-information-circle-outline" onClick={h} />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>

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
