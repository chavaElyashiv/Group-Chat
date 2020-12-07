import React, { useEffect } from 'react';
import shave from 'shave';

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
  dispatch(actions.getHangoutById(_id)), 

})
export default connect(mapStateToProps,mapDispatchToProps) (function ConversationListItem(props) {

  const {stateConversation ,setCurrentConversation} = props;



  useEffect(() => {
    // shave('.conversation-snippet', 20);
  })
 
  
  const {_id, profileGroup, name, text } = props.data;

  return (
    <div className="conversation-list-item" onClick={(e)=>setCurrentConversation(_id)} >
      <img className="conversation-photo" src={require("../../images/"+profileGroup)} alt="conversation" />
     

      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{text}</p>
      </div>
    </div>
  );
}
)