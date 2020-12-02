import { actions } from '../Actions/actions'


let userID = "ym4MmM09W3fan5xkOw6AmxxyNba2";
let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM";

export const getHangoutsForUser = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'GET_HANGOUTS_FOR_USER') {
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


export const getHangoutById = ({ dispatch, getState }) => next => action => {
    //debugger;
    if (action.type === 'GET_HANGOUT_BY_ID') {
        //getHangoutByID2=(hangoutId)=>{
        return fetch(` https://chat.leader.codes/api/${userID}/${action.payload}/getHangout`, {
            method: 'POST',
            headers: {
                Authentication: jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        }).then((res) => {
            console.log(res.waves)
            dispatch(actions.setConversation(res));
            //return res

        });
    }
    return next(action);
}