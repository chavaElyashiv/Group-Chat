import React from 'react';
import moment from 'moment';
import './Message.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/Actions/actions'
function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,
    userName:state.userName
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentConversation: (conversation) =>
    dispatch(actions.setConversation(conversation)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function Message(props) {
  const { stateConversation,userName, setCurrentConversation } = props;
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    name
  } = props;
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  if(userName!=data.from){
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
          <div class="from2" >{data.from}</div> 

        
    </div>
  );
}
  else{
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
          
            </div>  <div  class="from" >{data.from}</div> 

            {/* <div  class="from" >{data.from}</div>  */}

            </div>
            {/* <div class="pull-right" >{data.from}</div>  */}

          
      </div>
    );
  }
})