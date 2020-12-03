import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
// import ConvesationsService from '../../services/conversations.service'
import { connect } from 'react-redux'

import './ConversationList.css';

function mapStateToProps(state) {
    return {
        hangouts: state.hangouts
        // stateConversation:state.listConvesation,
    }

}
//   const mapDispatchToProps =(dispatch)=>({

//     setCurrentConversation:(_id)=>
//     dispatch(actions.getHangoutById(_id)), 

//   })
export default connect(mapStateToProps)(function ConversationList(props) {
    //const [conversations, setConversations] = useState(props.hangouts);
    const conversations=props.hangouts;
    debugger;
    // useEffect(async () => {
    //     // getConversations()
    //     // const items = await ConvesationsService.getHangoutsForUser();
    //     // setConversations(items.hangouts);
    //     const items=props.hangouts;
    // }, [])

    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newConversations = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Hello world! This is a long message that needs to be truncated.'
                };
            });
           // setConversations([...conversations, ...newConversations])
        });
    }
function h(){
    debugger;
    alert("you clicked")
}
    return (<div className="conversation-list" >
        <Toolbar title="Messenger"
            leftItems={
                [<ToolbarButton key="cog"
                    icon="ion-ios-cog" onClick={h}/>
                ]
            }
            rightItems={
                [<ToolbarButton key="add"
                    icon="ion-ios-add-circle-outline" />
                ]
            }
        /> <ConversationSearch /> {
            conversations.map(conversation =>
                <ConversationListItem key={conversation._id}
                    data={conversation}
                />
            )
        } </div>
    );
})