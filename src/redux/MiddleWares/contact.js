import { actions } from '../Actions/actions'


export const getContactsForUser = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'GET_CONTACTS_FOR_USER') {
        return fetch(`https://chat.leader.codes/api/${userID}/getAllHangouts`, {
            method: 'POST',
            headers: {
                Authentication: jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        }).then((res) => {
            debugger
            console.log(res.hangouts)
            //   return res
            dispatch(actions.setHangouts(res));


        });
    }
    return next(action);
}