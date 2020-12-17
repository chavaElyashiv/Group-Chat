import { actions } from '../Actions/actions'


export const setShow = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_SHOW') {

        if (action.payload == 'messages') {
            if (getState().showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().showNewHangout == true)
                dispatch(actions.setShowNewHangout());
            if (getState().showMembersList == true)
                dispatch(actions.setShowMembersList());
        }
        else if (action.payload == 'members') {
            dispatch(actions.setShowMembersList());
            if (getState().showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().showNewHangout == true)
                dispatch(actions.setShowNewHangout());
        }
        else if (action.payload == 'contacts') {
            dispatch(actions.setShowContactList());
            if (getState().showMembersList == true)
                dispatch(actions.setShowMembersList());
            if (getState().showNewHangout == true)
                dispatch(actions.setShowNewHangout());
        }
        else if (action.payload == 'newHangout') {
            dispatch(actions.setShowNewHangout());
            if (getState().showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().showMembersList == true)
                dispatch(actions.setShowMembersList());
        }
    }
    return next(action);

}
//getAllContactsExceptMembers
export const getAllContactsExceptMembers = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_CONTACTS_EXCEPT_MEMBERS') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/getAllContactsExceptMembers`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                console.log("contacts", res)
                dispatch(actions.setHangoutsContacts(res.contacts));


            })
    }
    return next(action);
}
export const getContactsForUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_CONTACTS_FOR_USER') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/getAllContacts`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                console.log("contacts", res)
                dispatch(actions.setContacts(res.contacts));


            })
    }
    return next(action);
}

export const AddContactsToHangout = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_CONTACTS_TO_HANGOUT') {
        action.payload.forEach(element => {
            return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/addNewMember`, {
                method: 'POST',
                body: JSON.stringify({ contactID: element._id }),
                headers: {
                    Authentication: getState().jwt,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                return res.json()


            })
                .then((res) => {
                    console.log("contacts", res)
                    if (res.contact)
                        dispatch(actions.addMember(res.contact));


                })

        });
    }
    return next(action);
}

export const getAllHangoutMembers = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === 'GET_ALL_HANGOUT_MEMBERS') {

        return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/getAllHangoutMembers`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                console.log("contacts", res)
                dispatch(actions.setMembers(res.memberList));


            })


    }
    return next(action);
}