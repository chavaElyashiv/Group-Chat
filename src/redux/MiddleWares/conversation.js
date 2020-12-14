import { actions } from '../Actions/actions'


let userID = "ym4MmM09W3fan5xkOw6AmxxyNba2";
// let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM";

export const setJwt = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'SET_JWT') {
        try {
            //debugger
            getState().jwt = document.cookie ? document.cookie.split(";")
                .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
        } catch (error) {
            getState().jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM"
        }
        // finally{
        //     dispatch(actions.)
        // }
    }
    return next(action);
}

export const getHangoutsForUser = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'GET_HANGOUTS_FOR_USER') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/getAllHangouts`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        }).then((res) => {
            //debugger
            console.log(res.hangouts)
            //   return res
            dispatch(actions.setHangouts(res.hangouts));


        });
    }
    return next(action);
}

export const getUidByUserName = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'GET_UID_BY_USER_NAME') {
        return fetch(`https://chat.leader.codes/api/getUser/${getState().userName}`, {
            method: 'GET',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()

        })
            .then((res) => {
                dispatch(actions.setUid(res.uid))
            }).then(() => {
                dispatch(actions.getHangoutsForUser())
                dispatch(actions.getContactsForUser())
             
            })

    }
    return next(action);
}
export const addNewWave = ({ dispatch, getState }) => next => action => {
    //debugger
    if (action.type === 'ADD_NEW_WAVE') {
        return fetch(`https://chat.leader.codes/api/' + ${getState().uid} + '/' +  ${getState().hangout} + '/addWave`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ wave: action.payload })
        }).then((res) => {
            return res.json()

        })
            .then((res) => {
                dispatch(actions.addWave(res.newWave))
            })

    }
    return next(action);
}

export const getHangoutById = ({ dispatch, getState }) => next => action => {
    ////debugger;
    if (action.type === 'GET_HANGOUT_BY_ID') {
        //getHangoutByID2=(hangoutId)=>{
        return fetch(` https://chat.leader.codes/api/${userID}/${action.payload}/getHangout`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()


        }).then((res) => {
            console.log("waves", res.waves)
            dispatch(actions.setConversation(res.waves));
            dispatch(actions.setCurrentHangout(action.payload));

            //return res

        }).then(()=>{
            debugger
            dispatch(actions.getAllHangoutMembers())
        })
    }
    return next(action);
}