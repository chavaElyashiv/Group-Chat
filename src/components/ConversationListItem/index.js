import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Overlay } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import accountMultiplePlus from '@iconify-icons/mdi/account-multiple-plus';
import './ConversationListItem.css';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'
import { blueGrey, red } from '@material-ui/core/colors';


function mapStateToProps(state) {
  return {
    stateConversation: state.listConvesation,

  }

}
// const mapDispatchToProps =(dispatch)=>({

//   setCurrentConversation:(_id)=>
//   dispatch(actions.getHangoutById(_id),  dispatch(actions.setShowContactList(false))), 

// })

export default connect(mapStateToProps)(function ConversationListItem(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { stateConversation, setCurrentConversation, AddContacts } = props;

  const getConversations = props.onClick;

  function contactList(_id) {
    getConversations(_id);
  }
  console.log("getConversations", getConversations);


  const { _id, profileGroup, name, text, email, thumbnail } = props.data;
  return (

    <div className="conversation-list-item" onClick={(e) => getConversations ? contactList(_id) : console.log(getConversations)} >
      {/* Group-Chat\src\images */}
      {/* C:\Users\User\OneDrive\Desktop\Group Chat\Group-Chat\src\images */}
      {profileGroup && <img className="conversation-photo" src={require("../../images/" + profileGroup)} alt="conversation" />}
      {thumbnail && <img className="conversation-photo" src={require("../../images/" + thumbnail)} alt="conversation" />}

      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{text}</p>
        <p className="conversation-snippet">{email}</p>


      </div>
      <>
        <Button variant="danger" ref={target} style={{
          border: 'none',
          background: 'none'
        }} onClick={() => setShow(!show)}>

          <i className="la la-ellipsis-v" />
          <div>
            <i variant="danger" ref={target} onClick={() => setShow(!show)} className="fa fa-ellipsis-v" />
          </div>
        </Button>

        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: '#ffff',
                padding: '2px 10px',
                color: 'black',
                borderRadius: 3,
                ...props.style,
              }}
            >
              <option className="option" value="">exit</option>
              <option className="option" value="">archive</option>

            </div>
          )}
        </Overlay>
      </>
    </div>
  );

})