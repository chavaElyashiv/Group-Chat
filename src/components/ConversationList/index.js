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
import { red } from '@material-ui/core/colors';

function mapStateToProps(state) {
    return {
        hangouts: state.hangouts,
        filteredHangouts: state.filteredHangouts

    }

}
const mapDispatchToProps = (dispatch) => ({
    setCurrentConversation: (_id) => dispatch(actions.getHangoutById(_id)
        , dispatch(actions.setShow("messages"))),
    setHangoutID: (_id) => dispatch(actions.setCurrentHangout(_id)),


    NewHanghout: () => dispatch(actions.setShow("newHangout"))


})
export default connect(mapStateToProps, mapDispatchToProps)(function ConversationList(props) {
    const { setCurrentConversation, NewHanghout, hangouts, setHangoutID } = props;
    const conversations = props.hangouts;
    const filteredHangouts = props.filteredHangouts;

    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newConversations = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Hello world! This is a long message that needs to be truncated.'
                };
            });
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
        /> <ConversationSearch list={hangouts} kindList="filteredHangouts" />
        {
            filteredHangouts && filteredHangouts.length > 0 ?
                filteredHangouts.map(conversation =>
                    <div >

                        <ConversationListItem key={conversation._id} className="color"
                            data={conversation} onClick={setHangoutID, setCurrentConversation}
                        /></div>
                ) : <div className="no-result">No results found</div>
        }

    </div>
    );
})