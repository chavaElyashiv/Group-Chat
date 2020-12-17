import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        members: state.members
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const mapDispatchToProps = (dispatch) => ({

    AddContactsToHangout: (AddContacts) => dispatch(actions.addContactsToHangout(AddContacts)),
    setShowContactList: () => dispatch(actions.setShowContactList())
})

export default connect(mapStateToProps, mapDispatchToProps)(function NewHangout(props) {
    debugger;
    const { contacts, AddContactsToHangout, members, setShowContactList } = props;
    console.log("*****", contacts);
    const classes = useStyles();
    var [AddContacts, setAddContacts] = useState([]);
    var [con, setCon] = useState([]);

    const addContactsToList = function (contact) {

        if (AddContacts.includes(contact)) {
            setAddContacts(AddContacts = AddContacts.filter(x => x !== contact));
        }
        else
            setAddContacts(AddContacts = AddContacts.concat(contact));

        console.log("AddContacts", AddContacts)
    }
    const clearList = function () {
        setAddContacts([]);
        AddContactsToHangout(AddContacts);
        setShowContactList();
    }
    console.log("contact-contactList", contacts);


    return (
        <div className="conversation-list" >

            {AddContacts ? AddContacts.map((item, index) => (
                console.log("item", item.email),
                <> {item.email} , </>
            )) : 'null'}

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

            <div className={classes.root}><Button variant="contained" color="primary" onClick={() => { clearList() }}>ADD CONTACTS!</Button></div>
        </div>

    );
});