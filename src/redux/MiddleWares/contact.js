import { actions } from '../Actions/actions'


export const getContactsForUser = ({ dispatch, getState }) => next => action => {
    ////debugger
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
                //   return res
                dispatch(actions.setContacts(res.contacts));


            })
    }
    return next(action);
}

export const AddContactsToHangout = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'ADD_CONTACTS_TO_HANGOUT') {
        action.payload.forEach(element => {
            //debugger;
            return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/addNewMember`, {
                method: 'POST',
                //  data:{contactID:element._id},
                body: JSON.stringify({ contactID: element._id }),
                headers: {
                    Authentication: getState().jwt,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                //debugger;
                return res.json()


            })
                .then((res) => {
                    console.log("contacts", res)
                    if(res.contact)
                    //   return res
                      dispatch(actions.addMember(res.contact));


                })

        });
    }
    return next(action);
}

export const getAllHangoutMembers = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === 'GET_ALL_HANGOUT_MEMBERS') {
   
            //debugger;
            return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/getAllHangoutMembers`, {
                method: 'POST',
                //  body: JSON.stringify({contactID:element._id}),
                headers: {
                    Authentication: getState().jwt,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                //debugger;
                return res.json()


            })
                .then((res) => {
                    console.log("contacts", res)
                    //   return res
                    dispatch(actions.setMembers(res.memberList));


                })

       
    }
    return next(action);
}