import React from 'react'
import headerImg from '../../assets/Mask Group 78.png'
import './Messenger.css'
export default function Messenger() {
    return (
        <div class="container-fluid back" >
            <div class="row">
                <div class="col-8 messageList mx-3 my-3">
                    <div class="row">
                        <div class="col headerImg" >
                            {/* <img src={headerImg}></img> */}
                        </div>

                    </div>
                    <div class="row">
                        <div class="col"></div>
                    </div>
                </div>
                <div class="col-4 conversationsList">
                    <div class="row profile">
                        <div class="col mx-2 my-2"></div>
                    </div>
                    <div class="row cl">
                        <div class="col mx-2 my-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}