import React, { useState, useEffect } from 'react';
import UploadImage from '../UploadImage'
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConversationSearch from '../ConversationSearch/index'
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';
import './NewHangout.css';

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        members: state.members,
        filteredContacts: state.filteredContacts,
        userName: state.userName,
        uid: state.uid,
        jwtFromCookie: state.jwt

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

    const { jwtFromCookie, uid, setShow, contacts, returnUsersId, AddContactsToHangout, members, setShowContactList, filteredContacts } = props;
    console.log("*****", contacts);
    const classes = useStyles();
    var [AddContacts, setAddContacts] = useState([]);
    var [groupName, setGroupName] = useState('');
    var [img, setImg] = useState('');
    // var [con, setCon] = useState([]);
    // setShowContactList

    const onChangeHandlerProfile = (event) => {

        const reader = new FileReader();
        const file = event;
        reader.onloadend = () => {
            setImg(reader.result);

        };
        reader.readAsDataURL(file);

        console.log("event", event)
        var fileToUpload = event

        var myFile = new FormData();
        myFile.append("file", fileToUpload);
        $.ajax({
            "url": 'https://chat.leader.codes/api/' + uid + '/uploadImageForHangout',
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {

                "Authorization": jwtFromCookie

            },
            "data": myFile,
            "async": false,
            success: function (data1) {
                console.log("success")
                console.log(data1);
                setTimeout(function () { console.log("after setTimeOut"); setImg(data1) }, 2000);
            },
            error: function (err) {
                console.log(err)
            }
        });




    }



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
            var hangout = { members: AddContacts, name: groupName, profileGroup: img }
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

            <form className={classes.root} noValidate autoComplete="off" style={{
                display: 'flex',
                alignItems: 'center'

            }}>
                <TextField id="outlined-basic" label="Fill Group Name" variant="outlined" onChange={e => { setGroupName(e.target.value) }} /> <label for="profileImg">
                    <img className="img_person conversation-photo" referrerpolicy="no-referrer" src={img} /></label>
                <input
                    type={"file"}
                    id="profileImg"
                    htmlFor="myInput"
                    accept="image/*"
                    style={{
                        display: 'none',
                        cursor: 'pointer',
                        float: 'right'
                        //   width:'5px',
                    }}
                    onChange={(e) => onChangeHandlerProfile(e.target.files[0])}
                /></form>


            {
                AddContacts ? AddContacts.map((item, index) => (
                    console.log("item", item.email),
                    <> {item.email} , </>
                )) : 'null'
            }
            {/* <UploadImage/> */}

            {/* <input type="file" name="" id=""/> */}

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
        </div >

    );
});