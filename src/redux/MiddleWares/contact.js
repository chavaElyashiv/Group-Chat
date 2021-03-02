import { actions } from '../Actions/actions'


export const setShow = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_SHOW') {

        if (action.payload == 'messages') {
            dispatch(actions.setShowMessagesList(true));
            if (getState().contactsReducer.showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().hangoutReducer.showNewHangout == true)
                dispatch(actions.setShowNewHangout());
            if (getState().hangoutReducer.showMembersList == true)
                dispatch(actions.setShowMembersList());
        }
        else if (action.payload == 'members') {
            if (getState().hangoutReducer.showMembersList == true) {
                dispatch(actions.setShowMessagesList());
            }
            else if (getState().hangoutReducer.showMessagesList == true)
                dispatch(actions.setShowMessagesList());

            dispatch(actions.setShowMembersList());

            if (getState().contactsReducer.showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().hangoutReducer.showNewHangout == true)
                dispatch(actions.setShowNewHangout());
            // if (getState().showNewHangout == false &&getState().showContactList == false &&getState().showMessagesList == false)
            // dispatch(actions.setShowMessagesList());
        }
        else if (action.payload == 'contacts') {
            dispatch(actions.setShowContactList());
            if (getState().hangoutReducer.showMessagesList == true)
                dispatch(actions.setShowMessagesList());
            if (getState().hangoutReducer.showMembersList == true)
                dispatch(actions.setShowMembersList());
            if (getState().hangoutReducer.showNewHangout == true)
                dispatch(actions.setShowNewHangout());
        }
        else if (action.payload == 'newHangout') {
            if (getState().hangoutReducer.showNewHangout == true) {
                dispatch(actions.setShowMessagesList());
            }
            else if (getState().hangoutReducer.showMessagesList == true)
                dispatch(actions.setShowMessagesList());
            dispatch(actions.setShowNewHangout());

            if (getState().contactsReducer.showContactList == true)
                dispatch(actions.setShowContactList());
            if (getState().hangoutReducer.showMembersList == true)
                dispatch(actions.setShowMembersList());
        }
    }
    return next(action);

}
//getAllContactsExceptMembers
export const getAllContactsExceptMembers = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_CONTACTS_EXCEPT_MEMBERS') {
        return fetch(`https://chat.leader.codes/api/${getState().userReducer.userName}/${getState().hangoutReducer.hangout}/getAllContactsExceptMembers`, {
            method: 'POST',
            headers: {
                Authentication: getState().userReducer.jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                checkPermission(res).then((ifOk) => {
                    console.log("contacts", res)
                    dispatch(actions.setHangoutsContacts(res.contacts));
                    dispatch(actions.setFilteredList({ list: res.contacts, kindList: "filteredAddContacts" }));
                })
            })
    }
    return next(action);
}
export const getContactsForUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_CONTACTS_FOR_USER') {
        return fetch(`https://chat.leader.codes/api/${getState().userReducer.userName}/getAllContacts`, {
            method: 'POST',
            headers: {
                Authentication: getState().userReducer.jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                checkPermission(res).then((ifOk) => {
                    console.log("contacts", res)
                    dispatch(actions.setContacts(res.contacts));
                    dispatch(actions.setFilteredList({ list: res.contacts, kindList: "filteredContacts" }));

                })

            })
    }
    return next(action);
}

export const AddContactsToHangout = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_CONTACTS_TO_HANGOUT') {
        action.payload.forEach(element => {
            return fetch(`https://chat.leader.codes/api/${getState().userReducer.userName}/${getState().hangoutReducer.hangout}/addNewMember`, {
                method: 'POST',
                body: JSON.stringify({ contactID: element._id }),
                headers: {
                    Authentication: getState().userReducer.jwt,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                return res.json()


            })
                .then((res) => {
                    checkPermission(res).then((ifOk) => {
                        console.log("contacts", res)
                        if (res.user) {
                            dispatch(actions.addMember(res.user));
                            dispatch(actions.setFilteredList({ list: getState().hangoutReducer.members, kindList: "filteredMembers" }));
                            dispatch(actions.getAllContactsExceptMembers())

                        }
                    })

                })

        });
    }
    return next(action);
}

export const getAllHangoutMembers = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_HANGOUT_MEMBERS') {


        return fetch(`https://chat.leader.codes/api/${getState().userReducer.userName}/${getState().hangoutReducer.hangout}/getAllHangoutMembers`, {
            method: 'POST',
            headers: {
                Authentication: getState().userReducer.jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        })
            .then((res) => {
                checkPermission(res).then((ifOk) => {
                    console.log("contacts", res)

                    dispatch(actions.setFilteredList({ list: res.memberList, kindList: "filteredMembers" }));
                    dispatch(actions.setMembers(res.memberList));



                })
            })


    }
    return next(action);
}
// export const getContactByUsername = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_CONTACT_BY_USERNAME') {
//         return fetch(`https://chat.leader.codes/api/${getState().userReducer.userName}/getUsernameReturnContact`, {
//             method: 'POST',
//             headers: {
//                 Authentication: getState().userReducer.jwt,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         }).then((res) => {
//             return res.json()


//         })
//             .then((res) => {
//                 checkPermission(res).then(async (ifOk) => {
//                     await dispatch(actions.addContactsToHangout(res.con))
//                     dispatch(actions.addNewHangout(getState().hangoutReducer.hangout));
//                     dispatch(actions.setFilteredList({ list: getState().hangoutReducer.hangouts, kindList: "filteredHangouts" }));

//                 })
//             })


//     }
//     return next(action);
// }
function checkPermission(result) {
    return new Promise((resolve, reject) => {
        if (result.status == "401") {
            result.routes ?
                window.location.assign(`https://dev.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
                window.location.assign(`https://dev.leader.codes/login?des=${result.des}`)
            reject(false)

        }
        resolve(true)

    })
}