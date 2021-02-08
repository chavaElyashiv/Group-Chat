import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConversationSearch from '../ConversationSearch/index'



function mapStateToProps(state) {
    return {
        contacts: state.contactsReducer.hangoutsContacts,
        members: state.hangoutReducer.members,
        filteredAddContacts: state.filteredListReducer.filteredAddContacts
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

    AddContactsToHangout: (AddContacts) =>
        dispatch(actions.addContactsToHangout(AddContacts)),
    setShowContactList: () => dispatch(actions.setShow("members"))

})
export default connect(mapStateToProps, mapDispatchToProps)(function ContactList(props) {
    const { filteredAddContacts, contacts, AddContactsToHangout, members, setShowContactList } = props;
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

    console.log("contact-contactList", contacts);
    return (
        <div className="conversation-list" >
            <ConversationSearch list={contacts} kindList="filteredAddContacts" />

            {AddContacts ? AddContacts.map((item, index) => (
                console.log("item", item.email),
                <> {item.email} , </>
            )) : 'null'}

            {
                filteredAddContacts.map(contact =>
                    <ConversationListItem key={contact._id}
                        data={contact}
                        onClick={() => addContactsToList(contact)
                        }
                        AddContacts={AddContacts}
                    />
                )
            }

            <div className={classes.root}><Button variant="contained" color="primary" onClick={() => { setShowContactList() }}>ADD CONTACTS</Button></div>
        </div>

    );
})