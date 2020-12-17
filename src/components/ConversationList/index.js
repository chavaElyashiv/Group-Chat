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
<<<<<<< HEAD
        hangouts: state.hangouts
    }

}
const mapDispatchToProps = (dispatch) => ({
    setCurrentConversation: (_id) => dispatch(actions.getHangoutById(_id)
        , dispatch(actions.setShow("messages"))),
    
=======
        hangouts: state.hangouts,
        filteredHangouts: state.filteredHangouts
        // stateConversation:state.listConvesation,
    }

}
  const mapDispatchToProps =(dispatch)=>({
    setCurrentConversation:(_id)=>
    dispatch(actions.getHangoutById(_id),  dispatch(actions.setShowContactList(false)),dispatch(actions.setShowMembersList(false))), 
  })
export default connect(mapStateToProps,mapDispatchToProps)(function ConversationList(props) {
    //const [conversations, setConversations] = useState(props.hangouts);
    const { setCurrentConversation } = props;
    // const conversations=props.hangouts;
    const filteredHangouts = props.filteredHangouts;

    // useEffect(async () => {
    //     // getConversations()
    //     // const items = await ConvesationsService.getHangoutsForUser();
    //     // setConversations(items.hangouts);
    //     const items=props.hangouts;
    // }, [])
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a

    NewHanghout: () => dispatch(actions.setShow("newHangout"))


})
export default connect(mapStateToProps, mapDispatchToProps)(function ConversationList(props) {
    const { setCurrentConversation, NewHanghout } = props;
    const conversations = props.hangouts;
 
    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newConversations = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Hello world! This is a long message that needs to be truncated.'
                };
            });
<<<<<<< HEAD
=======
            // setConversations([...conversations, ...newConversations])
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a
        });
    }

    return (<div className="conversation-list" >
        <Toolbar title="Messenger"
            leftItems={
                [<ToolbarButton key="cog"
                    icon="ion-ios-cog" />
                ]
            }
            rightItems={
                [<ToolbarButton key="add"
                    icon="ion-ios-add-circle-outline" onClick={NewHanghout} />
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
        {/* {
            filteredHangouts.map(conversation =>
                
                <ConversationListItem key={conversation._id}
                    data={conversation} onClick={setCurrentConversation}
                />
            )
<<<<<<< HEAD
        }
=======
        } */}
>>>>>>> 6f1ceaa7ac91fe9a6bd024e9c1f2c254cb28ad6a
    </div>
    );
})