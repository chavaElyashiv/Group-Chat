

import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import '../ConversationList/ConversationList.css'

function mapStateToProps(state) {
    return {
        members: state.members,
        showContactList: state.showContactList
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
    
    setShowContactList: () => dispatch(actions.setShowContactList(), dispatch(actions.setShowMembersList()))

})
export default connect(mapStateToProps, mapDispatchToProps)(function MembersList(props) {
    //debugger;
    const { members, setShowContactList } = props;
    const classes = useStyles();

    return (
        <div className="conversation-list" >

            {/* {AddContacts ? AddContacts.map((item, index) => (
                console.log("item", item.email),
                <> {item.email} , </>
            )) : 'null'}
            */}
            {
                members.map(member =>
                    <ConversationListItem key={member._id}
                        data={member}
                    //    onClick={() => addContactsToList(contact)
                    //  }
                    //   AddContacts={AddContacts}
                    />
                )
            }

            <div className={classes.root}><Button variant="contained" color="primary" onClick={() => { setShowContactList() }}>ADD CONTACT!</Button></div>
        </div>

    );
})