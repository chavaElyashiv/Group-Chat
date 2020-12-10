import { actions } from '../Actions/actions'


export const getContactsForUser = ({ dispatch, getState }) => next => action => {
    //debugger
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