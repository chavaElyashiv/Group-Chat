import React from 'react';
import moment from 'moment';
import './Message.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/Actions/actions'
function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,
    userName: state.userName
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentConversation: (conversation) =>
    dispatch(actions.setConversation(conversation)),
  getUsernameReturnEmail: (username) => dispatch(actions.getUsernameReturnEmail(username))

})
export default connect(mapStateToProps, mapDispatchToProps)(function Message(props) {
  const { getUsernameReturnEmail, stateConversation, userName, setCurrentConversation } = props;
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    name
  } = props;
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  async function func() {
    var contactEmail = await getUsernameReturnEmail(data.from);
    window.location = `https://contacts.leader.codes/${userName}?c="${contactEmail}"`


  }


  if (userName != data.from) {
    return (
      <div className={['message'].join(' ')}>
        {
          showTimestamp &&
          <div className="timestamp">
            {friendlyTimestamp}
          </div>
        }
        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            {data.body}

          </div>
          {/* <p class="sentText pr-10">{name}</p> */}
        </div>
        {/* `https://contacts.leader.codes/${userName}` */}
        <a href="#" onClick={(e) => { func(); return false; }} class="active">

          <div class="from2" >{data.from}</div> </a>

          
      </div>
    );
  }
  else {
    return (
      <div className={[
        'message', 'mine', 'start'

      ].join(' ')}>
        {
          showTimestamp &&
          <div className="timestamp">
            {friendlyTimestamp}
          </div>
        }
        <div >
          <div className="bubble-container">
            <div className="bubble" title={friendlyTimestamp}>
              {data.body}
              {/* <div  class="from" >{data.from}</div>  */}

            </div>

            {/* <div>{data.from}</div>   */}

          </div>
          {/* <a href="#"onClick={(e)=>{func(); return false;}} class="active">

            <div class="from" >{data.from}</div> </a> */}

          <div class="from" >ME</div>

        </div>


      </div>
    );
  }
})