import React, { useEffect } from 'react';
import shave from 'shave';
import './ConversationListItem.css';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'
import { blueGrey, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,
    owner: state.owner,
    showMembers: state.showMembersList

  }

}
const mapDispatchToProps = (dispatch) => ({

  GivePermission: (_id) =>
    dispatch(actions.getManagerPermission(_id))
})

//   setCurrentConversation:(_id)=>
//   dispatch(actions.getHangoutById(_id),  dispatch(actions.setShowContactList(false))), 

// })

export default connect(mapStateToProps, mapDispatchToProps)(function ConversationListItem(props) {

  const { stateConversation, setCurrentConversation, AddContacts, GivePermission, showMembers, owner, showButton } = props;

  const getConversations = props.onClick;

  function contactList(_id) {
    getConversations(_id);
  }
  console.log("getConversations", getConversations);

  const { _id, profileGroup, name, text, email, thumbnail } = props.data;
  return (
    <>
      <div className="conversation-list-item" onClick={(e) => getConversations ? contactList(_id) : console.log(getConversations)} >

        {profileGroup && <img className="conversation-photo" src={require("../../images/" + profileGroup)} alt="conversation" />}
        {thumbnail && <img className="conversation-photo" src={require("../../images/" + thumbnail)} alt="conversation" />}

        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className="conversation-snippet">{text}</p>
          <p className="conversation-snippet">{email}</p>

        </div>
      </div >
      {owner && showButton && <Button variant="contained" color="primary" onClick={(e) => GivePermission(_id)}> Manager permission</Button>}

    </>
  );

})