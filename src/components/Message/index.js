import React from 'react';
import moment from 'moment';
import './Message.css';
import { connect } from 'react-redux';
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
export default connect(mapStateToProps, mapDispatchToProps)(function Message(props) {
  const { stateConversation, setCurrentConversation } = props;
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;

  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  // return (
  //   <div className={[
  //     'message',
  //     `${isMine ? 'mine' : ''}`,
  //     `${startsSequence ? 'start' : ''}`,
  //     `${endsSequence ? 'end' : ''}`
  //   ].join(' ')}>
  //     {
  //       showTimestamp &&
  //         <div className="timestamp">
  //           { friendlyTimestamp }
  //         </div>
  //     }

  //     <div className="bubble-container">
  //       <div className="bubble" title={friendlyTimestamp}>
  //         {data.message}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>
      {
        showTimestamp &&
        <div className="timestamp">
          {friendlyTimestamp}
        </div>
      }
      {stateConversation
        .map((element) =>
          <div className="bubble-container">
            <div className="bubble" title={friendlyTimestamp}>
              {element.body}
            </div>
          </div>
        )}
    </div>
  );
})