import React, { useState, useEffect } from 'react';
import ConversationListItem from '../ConversationListItem';
import { actions } from '../../redux/Actions/actions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ConversationSearch from '../ConversationSearch/index'



function mapStateToProps(state) {
    return {
        members: state.members,
        showContactList: state.showContactList,
        filteredMembers: state.filteredMembers,
        manager: state.manager,
        owner: state.owner,
        managersList: state.managersList
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

    setShowContactList: () => dispatch(actions.setShow("contacts"))

})
export default connect(mapStateToProps, mapDispatchToProps)(function MembersList(props) {
    const { members, setShowContactList, filteredMembers, owner, manager, managersList } = props;
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
            </div>

        </div>

    );
})