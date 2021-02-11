import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Overlay } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import accountMultiplePlus from '@iconify-icons/mdi/account-multiple-plus';
import './ConversationListItem.css';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'
import { blueGrey, red } from '@material-ui/core/colors';
import Button1 from '@material-ui/core/Button';


function mapStateToProps(state) {
  return {
    stateConversation: state.hangoutReducer.listConvesation,
    owner: state.hangoutReducer.owner,
    manager: state.hangoutReducer.manager,
    showMembers: state.hangoutReducer.showMembersList,
    // showNewHangout: state.hangoutReducer.showNewHangout
  }

}
const mapDispatchToProps = (dispatch) => ({

  GivePermission: (_id) =>
    dispatch(actions.getManagerPermission(_id)),
  removeMember: (_id) => dispatch(actions.removeMemberByManager(_id), dispatch(actions.getManagerPermission(_id))),
  exitHangout: () => dispatch(actions.exitHangout())
})

//   setCurrentConversation:(_id)=>
//   dispatch(actions.getHangoutById(_id),  dispatch(actions.setShowContactList(false))), 

// })

export default connect(mapStateToProps, mapDispatchToProps)(function ConversationListItem(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { stateConversation,
    setCurrentConversation,
    AddContacts,
    GivePermission,
    removeMember,
    exitHangout,
    showMembers,
    // showNewHangout,
    owner,
    manager,
    showButton,
    isManager } = props;

  const getConversations = props.onClick;
  // const conversationsEndRef = useRef(null)
  // const scrollToBottom = () => {
  //   conversationsEndRef.current?.scrollIntoView()
  // }

  // useEffect(() => {
  //   scrollToBottom()
  // }, [showNewHangout]);

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
      {owner && showButton && <Button1 variant="contained" color="primary" onClick={(e) => GivePermission(_id)}> {isManager ? "remove permission" : "Manager permission"}</Button1>}
      {owner && showButton && <Button1 variant="contained" color="primary" onClick={(e) => removeMember(_id)}>remove member</Button1>}

      <>
        {!showButton && <button type="button" class="btn" ref={target}
          style={{
            border: 'none',
            background: 'none'
          }}
          onClick={() => setShow(!show)}>

          <i className="la la-ellipsis-v" />
          <div>
            <i variant="danger" ref={target} onClick={() => setShow(!show)} className="fa fa-ellipsis-v" />
          </div>
        </button>}

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
              <option className="option" value="">delete</option>
              <option className="option" value="" onClick={(e) => exitHangout()} >exit</option>
              <option className="option" value="">archive</option>

            </div>
          )}
        </Overlay>
      </>
      {/* {!showButton && <div ref={conversationsEndRef} />} */}
    </div>
  );

})