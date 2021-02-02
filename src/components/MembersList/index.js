import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConversationSearch from '../ConversationSearch/index'



function mapStateToProps(state) {
    return {
        members: state.hangoutReducer.members,
        showContactList: state.contactsReducer.showContactList,
        filteredMembers: state.filteredListReducer.filteredMembers,
        manager: state.hangoutReducer.manager,
        owner: state.hangoutReducer.owner,
        managersList: state.hangoutReducer.managersList,
        hangoutId: state.hangoutReducer.hangout
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

    setShowContactList: () => dispatch(actions.setShow("contacts")),
    deleteHangout: (hangoutId) => dispatch(actions.deleteHangout(hangoutId))
})
export default connect(mapStateToProps, mapDispatchToProps)(function MembersList(props) {
    const { members, setShowContactList, deleteHangout, filteredMembers, owner, manager, managersList, hangoutId } = props;
    const classes = useStyles();
    return (
        <div className="conversation-list" >

            <ConversationSearch list={members} kindList="filteredMembers" />

            {
                filteredMembers.map(member =>

                    <ConversationListItem key={member._id}
                        data={member}
                        showButton={true}
                        isManager={managersList.includes(member._id)}

                    />
                )
            }

            <div className={classes.root}>

                {(owner == true || manager == true) && <Button variant="contained" color="primary" onClick={() => { setShowContactList() }}>ADD CONTACT!</Button>}
                {owner && <Button variant="contained" color="primary" onClick={(e) => deleteHangout(hangoutId)}>delete channel</Button>}

            </div>

        </div>

    );
})