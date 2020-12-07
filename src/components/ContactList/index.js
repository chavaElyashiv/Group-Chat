

import React, { useState, useEffect } from 'react';
// import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
// import axios from 'axios';
import { connect } from 'react-redux'

// import '../ConversationList/ConversationList.css'

function mapStateToProps(state) {
    return {
        contacts: state.contacts
        // stateConversation:state.listConvesation,
    }

}
//   const mapDispatchToProps =(dispatch)=>({

//     setCurrentConversation:(_id)=>
//     dispatch(actions.getHangoutById(_id)), 

//   })
export default connect(mapStateToProps)(function ContactList(props) {
    debugger;
    const conversations = props.contacts;

    console.log("contact-contactList", conversations);
    return (


        <div className="conversation-list" >
            
            {/* <Toolbar title="Messenger"
            leftItems={
                [<ToolbarButton key="cog"
                    icon="ion-ios-cog" />
                ]
            }
            rightItems={
                [<ToolbarButton key="add"
                    icon="ion-ios-add-circle-outline" />
                ]
            }
        />  */}
            {/* <ConversationSearch />  */}
            {
                conversations.map(conversation =>
                    <ConversationListItem key={conversation._id}
                        data={conversation}
                    />
                )
            } </div>
    );
})