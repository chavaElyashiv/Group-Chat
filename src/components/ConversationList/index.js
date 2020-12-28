import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'

import './ConversationList.css';
import ContactList from '../ContactList';

function mapStateToProps(state) {
    return {
        hangouts: state.hangouts,
        filteredHangouts: state.filteredHangouts
        
    }

}
  const mapDispatchToProps =(dispatch)=>({
    setCurrentConversation:(_id)=>
    dispatch(actions.getHangoutById(_id),  dispatch(actions.setShowContactList(false)),dispatch(actions.setShowMembersList(false))), 
  })
export default connect(mapStateToProps,mapDispatchToProps)(function ConversationList(props) {
  
    const { setCurrentConversation } = props;
  
    const filteredHangouts = props.filteredHangouts;

  
   
    return (<div className="conversation-list" >
        <Toolbar title="Messenger"
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
        /> <ConversationSearch />
        {
          filteredHangouts && filteredHangouts.length > 0 ?
                filteredHangouts.map(conversation =>

                    <ConversationListItem key={conversation._id}
                        data={conversation} onClick={setCurrentConversation}
                    />
                ) : <div className="no-result">No results found</div>
        }
       
    </div>
    );
})