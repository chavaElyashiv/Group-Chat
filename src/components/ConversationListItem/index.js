import React, { useEffect } from 'react';
import shave from 'shave';
import ConvesationsService from '../../services/conversations.service'
import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })
  const activateLasers=async()=>{
    alert(_id)
    const listConvesation = await ConvesationsService.getHangoutByID(_id);

}
  
  const {_id, profileGroup, name, text } = props.data;

  return (
    <div className="conversation-list-item" onClick={activateLasers} >
      <img className="conversation-photo" src={require("../../images/"+profileGroup)} alt="conversation" />
      {/* <img className="conversation-photo" src={require('../../images/user-1.jpg')} alt="conversation" />  */}

      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{text}</p>
      </div>
    </div>
  );
}