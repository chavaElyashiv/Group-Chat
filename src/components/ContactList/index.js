

import React, { useState, useEffect } from 'react';
// import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
// import axios from 'axios';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import '../ConversationList/ConversationList.css'

function mapStateToProps(state) {
    return {
        contacts: state.contacts
        // stateConversation:state.listConvesation,
    }

}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
//   const mapDispatchToProps =(dispatch)=>({

//     setCurrentConversation:(_id)=>
//     dispatch(actions.getHangoutById(_id)), 

//   })
export default connect(mapStateToProps)(function ContactList(props) {
    debugger;
    const contacts = props.contacts;
    const classes = useStyles();
    // var arr = [];
    var [AddContacts, setAddContacts] = useState([{ email: "oiipip" }]);
    var [con, setCon] = useState([]);
    // useEffect(()=>{setMyUser(us)},us)
    // useEffect(() => {
    //     debugger
    //     console.log("changed");
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setAddContacts(arr);
    //   }, arr);
    // useEffect(() => { console.log('re-rendered!'); });
    // useEffect(() => {
    //     debugger
    //     setAddContacts(arr)
    //     console.log("addcontact",AddContacts);
    // });
    const addContactsToList = function (contact) {
        // setCon(contact.email);
        debugger
        if(AddContacts.includes(contact)){
            setAddContacts(AddContacts = AddContacts.filter(x => x !== contact));
        }
       
else
        setAddContacts(AddContacts=AddContacts.concat(contact));

       
        console.log("AddContacts", AddContacts)
        // console.log("arr", arr)

    }
    console.log("contact-contactList", contacts);
    return (


        <div className="conversation-list" >

            {AddContacts ? AddContacts.map((item, index) => (
                console.log("item", item.email),
                <>{item.email}</>
            )) : 'null'}
            {/* {con}<br/> */}
            {/* {AddContacts ? AddContacts : 'oio'} */}
            {
                contacts.map(contact =>
                    <ConversationListItem key={contact._id}
                        data={contact}
                        onClick={() => addContactsToList(contact)
                        }
                        AddContacts={AddContacts}
                    />
                )
            }

            <div className={classes.root}><Button variant="contained" color="primary">ADD CONTACT</Button></div>
        </div>

    );
})