import { actions } from '../Actions/actions'


let userID = "ym4MmM09W3fan5xkOw6AmxxyNba2";

export const setJwt = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_JWT') {
        try {
            getState().jwt = document.cookie ? document.cookie.split(";")
                .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
        } catch (error) {
            getState().jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM"
        }

    }
    return next(action);
}

export const getHangoutsForUser = ({ dispatch, getState }) => next => action => {
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
            console.log(res.hangouts)
            dispatch(actions.setHangouts(res.hangouts));
            dispatch(actions.setFilteredHangouts(res.hangouts));

        });
    }
    return next(action);
}

export const getUidByUserName = ({ dispatch, getState }) => next => action => {
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
    if (action.type === 'ADD_NEW_WAVE') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/${getState().hangout}/addWave`, {
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
export const newHangout = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_HANGOUT') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/newHangout`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hangout: action.payload })
        }).then((res) => {
            return res.json()

        })
            .then((res) => {
                dispatch(actions.addNewHangout(res.newHangout));
            })

    }
    return next(action);
}

export const getUsernameReturnEmail = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_USERNAME_RETURN_EMAIL') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/getUsernameReturnEmail`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: action.payload })
        }).then((res) => {
            return res.json()

        })
            .then((res) => {
                return res.email
                // dispatch(actions.addNewHangout(res.hangout))
            })

    }
    return next(action);
}
export const returnUsersId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'RETURN_USERS_ID') {
        return fetch(`https://chat.leader.codes/api/${getState().uid}/getContactsReturnUsers`, {
            method: 'POST',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contacts: action.payload.members })
        }).then((res) => {
            return res.json()

        })
            .then((res) => {
                let hangout = { members: res.users, name: action.payload.name, manager: action.payload.manager }
                dispatch(actions.newHangout(hangout))
            })

    }
    return next(action);
}

export const getHangoutById = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_HANGOUT_BY_ID') {
        return fetch(`https://chat.leader.codes/api/${userID}/${action.payload}/getHangout`, {
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
            dispatch(actions.setFilteredList({ list: res.waves, kindList: "filteredMessages" }));
            dispatch(actions.setCurrentHangout(action.payload));
            dispatch(actions.setManager(res.manager));

        }).then(() => {
            dispatch(actions.getAllHangoutMembers())
            dispatch(actions.getAllContactsExceptMembers())

        })
    }
    return next(action);
}