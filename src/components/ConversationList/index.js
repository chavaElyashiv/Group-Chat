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
        hangouts: state.hangoutReducer.hangouts,
        filteredHangouts: state.filteredListReducer.filteredHangouts,
        waves:state.hangoutReducer.lastWavesArr

    }

}
const mapDispatchToProps = (dispatch) => ({
    setCurrentConversation: (_id) => dispatch(actions.getHangoutById(_id)
        , dispatch(actions.setShow("messages"))),
    setHangoutID: (_id) => dispatch(actions.setCurrentHangout(_id)),


    NewHanghout: () => dispatch(actions.setShow("newHangout"))


})
export default connect(mapStateToProps, mapDispatchToProps)(function ConversationList(props) {
    const { setCurrentConversation, NewHanghout, hangouts, setHangoutID ,waves} = props;
    const conversations = props.hangouts;
    const filteredHangouts = props.filteredHangouts;
    const resultHangoutSort=[];
    const [waveSort,setWaveSort] =useState()
    const [hangoutSort,setHangoutSort]=useState()

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
useEffect(()=>{sortWaves()},[waveSort,props.waves])

    const sortWaves =()=>{
        debugger
            waves && waves.length > 0 ?
            setWaveSort( waves.slice().sort((a, b) => a.timestamp > b.timestamp ? 1 : -1))

            // setWaveSort( waves.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1))
                 : <div className="no-result">No results found</div>
        
            waveSort && waveSort.length > 0 ?
            waveSort.forEach(function(key){
                var found = false
                setHangoutSort(hangouts.filter(function(item){
                    if(!found && item.conversations[conversations.length-1]==key.conversation){
                        resultHangoutSort.push(item)
                        found=true
                        return false
                    }
                    else
                         return true
                }))
            })
            : <div className="no-result"></div>
            setHangoutSort(resultHangoutSort)
    }

    return (
        <div class="container-fluid conversation-list p-0" >
            <div class="row">
                <div class="col title-new-conversations mr-3 ml-3" onClick={NewHanghout}>
                    + New Conversations
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ConversationSearch list={hangouts} kindList="filteredHangouts" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1 className="conversationsTitle">Conversations</h1>
                </div>
            </div>
            <div class="row cli scrollable2">
                <div class="col ">
                    {/* {
                        waves && waves.length > 0 ?
                            waves.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1)
                             : <div className="no-result">No results found</div>
                    } */}


                    {/* {

                        waves && waves.length > 0 ?
                        waves.conversation.forEach(function(key){
                            var found = false
                            hangouts=hangouts.filter(function(item){
                                if(!found && item.conversation==key){
                                    resultHangoutSort.push(item)
                                    found=true
                                    return false
                                }
                                else
                                     return true
                            })
                        })
                        : <div className="no-result"></div>

                    } */}

                    {
                        hangoutSort && hangoutSort.length > 0 ?
                        hangoutSort.map(conversation =>
                                <div >

                                    <ConversationListItem key={conversation._id} className="color"
                                        data={conversation} onClick={setHangoutID, setCurrentConversation}
                                        showExit={true}
                                    /></div>
                            ) : <div className="no-result">No results found</div>
                    }
                
                </div>
                
            </div>

        </div>
    );
})