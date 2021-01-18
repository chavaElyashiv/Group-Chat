import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConversationSearch from '../ConversationSearch/index'
import TextField from '@material-ui/core/TextField';



function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        members: state.members,
        filteredContacts: state.filteredContacts,
        userName: state.userName
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

const mapDispatchToProps = (dispatch) => ({
    returnUsersId: (hangout) => dispatch(actions.returnUsersId(hangout)),
    AddContactsToHangout: (AddContacts) => dispatch(actions.addContactsToHangout(AddContacts)),
    setShow: () => dispatch(actions.setShow("newHangout"))
    //  setShowContactList: () => dispatch(actions.setShowContactList()),
    // setFilteredContacts:()=> dispatch(actions.setShowContactList())
})

export default connect(mapStateToProps, mapDispatchToProps)(function NewHangout(props) {

    const { setShow, contacts, returnUsersId, AddContactsToHangout, members, setShowContactList, filteredContacts, userName } = props;
    console.log("*****", contacts);
    const classes = useStyles();
    var [AddContacts, setAddContacts] = useState([]);
    var [groupName, setGroupName] = useState('');
    // var [con, setCon] = useState([]);
    // setShowContactList

    const addContactsToList = function (contact) {

        if (AddContacts.includes(contact)) {
            setAddContacts(AddContacts = AddContacts.filter(x => x !== contact));
        }
        else
            setAddContacts(AddContacts = AddContacts.concat(contact));

        console.log("AddContacts", AddContacts)
    }
    const clearList = function () {
        if (AddContacts.length > 0 && groupName != '') {
            var hangout = { members: AddContacts, name: groupName, owner: userName }
            setAddContacts([]);
            returnUsersId(hangout);
            setShow();

        }
        // AddContactsToHangout(AddContacts);
        // setShowContactList();
    }
    console.log("contact-contactList", contacts);


    return (
        <div className="conversation-search" >
            <ConversationSearch list={contacts} kindList="filteredContacts" />

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Fill Group Name" variant="outlined" onChange={e => { setGroupName(e.target.value) }} /></form>
            {AddContacts ? AddContacts.map((item, index) => (
                console.log("item", item.email),
                <> {item.email} , </>
            )) : 'null'}


            {
                filteredContacts.map(contact =>
                    <ConversationListItem key={contact._id}
                        data={contact}
                        onClick={() => addContactsToList(contact)
                        }
                        AddContacts={AddContacts}
                    />
                )
            }

            <div className={classes.root}><Button variant="contained" color="primary" onClick={() => { clearList() }}>Create New Group</Button></div>
        </div>

    );
});