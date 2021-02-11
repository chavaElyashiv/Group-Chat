import React from 'react'
import './Messenger.css'
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
export default function Messenger(props) {
    return (
        <div class="container-fluid" >
            <div class="row">
                <div class="col-9 messageList  my-3 px-5">
                    <div class="row">
                        <div class="col headerImg">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col ml scrollable">
                            < MessageList />
                        </div>
                    </div>
                </div>
                <div class="col-3 conversationsList my-3 pr-5">
                    <div class="row profile  ">
                        <div class="col"></div>
                    </div>
                    <div class="row cl mt-3">
                        <div class="col p-0">
                            <ConversationList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}