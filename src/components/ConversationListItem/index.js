import React, { useEffect } from 'react';
import shave from 'shave';
import ConvesationsService from '../../services/conversations.service'
import './ConversationListItem.css';
import {connect} from 'react-redux'
import{actions} from '../../redux/Actions/actions'

function mapStateToProps(state){
  return{
    stateConversation:state.listConvesation,
  }

}
const mapDispatchToProps =(dispatch)=>({
  
  setCurrentConversation:(_id)=>
  dispatch(actions.getHangoutById(_id),alert(_id)), 

})
export default connect(mapStateToProps,mapDispatchToProps) (function ConversationListItem(props) {

  const {stateConversation ,setCurrentConversation} = props;

//   const activateLasers=async()=>{
//     alert(_id)
//    let data = await ConvesationsService.getHangoutByID(_id);
//     setCurrentConversation(data)
  
// }

  useEffect(() => {
    shave('.conversation-snippet', 20);
  })
 
  
  const {_id, profileGroup, name, text } = props.data;

  return (
    <div className="conversation-list-item" onClick={(e)=>setCurrentConversation(_id)} >
      <img className="conversation-photo" src={require("../../images/"+profileGroup)} alt="conversation" />
      {/* <img className="conversation-photo" src={require('../../images/user-1.jpg')} alt="conversation" />  */}

      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{text}</p>
      </div>
    </div>
  );
}
)