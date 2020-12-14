import React, { useEffect } from 'react';
import shave from 'shave';
import './ConversationListItem.css';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'

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

  const { stateConversation, setCurrentConversation, AddContacts } = props;

  //debugger;
  const getConversations = props.onClick;
  function contactList(_id) {
    //debugger;
    getConversations(_id);
  }
  console.log("getConversations", getConversations);


  //   const activateLasers=async()=>{
  //     alert(_id)
  //    let data = await ConvesationsService.getHangoutByID(_id);
  //     setCurrentConversation(data)


  // useEffect(() => {
  //   // shave('.conversation-snippet', 20);
  // })


  const { _id, profileGroup, name, text, email, thumbnail } = props.data;
  return (

    <div className="conversation-list-item" onClick={(e) => getConversations ? contactList(_id) : console.log(getConversations)} >

      {profileGroup && <img className="conversation-photo" src={require("../../images/" + profileGroup)} alt="conversation" />}
      {thumbnail && <img className="conversation-photo" src={require("../../images/" + thumbnail)} alt="conversation" />}
      {/* {AddContacts?AddContacts:'jhkji'} */}
      {/* {AddContacts? AddContacts.map((item, index) => (
        <React.Fragment key={index} item={item} />
      )):'km'} */}
      <div className="conversation-info">
        <h1 className="conversation-title">{name}</h1>
        <p className="conversation-snippet">{text}</p>
        <p className="conversation-snippet">{email}</p>

      </div>
    </div>
  );

}
)