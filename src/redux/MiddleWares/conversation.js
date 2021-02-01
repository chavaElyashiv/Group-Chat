import { actions } from '../Actions/actions'


let userID = "ym4MmM09W3fan5xkOw6AmxxyNba2";

export const setJwt = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_JWT') {
        try {
            getState().jwt = document.cookie ? document.cookie.split(";")
                .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
        } catch (error) {
            //debugger
            dispatch(actions.setJwtStore("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM"));
            //   getState().jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM"
        }

    }
    return next(action);
}

export const getHangoutsForUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_HANGOUTS_FOR_USER') {
        //debugger
        return fetch(`https://chat.leader.codes/api/${getState().userName}/getAllHangouts`, {
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
                // checkPermission(res).then((ifOk) => {
                //debugger;

                console.log(res.hangouts)
                dispatch(actions.setHangouts(res.hangouts));
                dispatch(actions.setFilteredHangouts(res.hangouts));
            })
        // .catch((err) => {
        //     console.log(err)
        // })
        //  })

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
                //    checkPermission(res).then((ifOk) => {
                dispatch(actions.setUid(res.uid))

            }).then(() => {
                dispatch(actions.getHangoutsForUser())
                dispatch(actions.getContactsForUser())
            })
        //      })
    }
    return next(action);
}

export const getIdByUserName = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ID_BY_USER_NAME') {
        return fetch(`https://chat.leader.codes/api/getUser/${getState().userName}`, {
            method: 'GET',
            headers: {
                Authentication: getState().jwt,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            // checkPermission(res).then((ifOk) => {
            dispatch(actions.setId(res._id))
        })
        //  })
    }
    return next(action);
}
export const addNewWave = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_NEW_WAVE') {
        //debugger
        return fetch(`https://chat.leader.codes/api/${getState().userName}/${getState().hangout}/addWave`, {
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
                //     checkPermission(res).then((ifOk) => {

                dispatch(actions.addWave(res.newWave))
            })
        //     })

    }
    return next(action);
}
export const newHangout = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_HANGOUT') {
        return fetch(`https://chat.leader.codes/api/${getState().userName}/newHangout`, {
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
                //     checkPermission(res).then((ifOk) => {
                dispatch(actions.addNewHangout(res.newHangout));
            })
        //   })

    }
    return next(action);
}

export const getUsernameReturnEmail = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_USERNAME_RETURN_EMAIL') {
        return fetch(`https://chat.leader.codes/api/${getState().userName}/getUsernameReturnEmail`, {
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
                //      checkPermission(res).then((ifOk) => {
                return res.email
                // dispatch(actions.addNewHangout(res.hangout))
            })
        //   })

    }
    return next(action);
}
export const returnUsersId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'RETURN_USERS_ID') {
        return fetch(`https://chat.leader.codes/api/${getState().userName}/getContactsReturnUsers`, {
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
                //    checkPermission(res).then((ifOk) => {
                let hangout = { members: res.users, name: action.payload.name, owner: action.payload.owner }
                dispatch(actions.newHangout(hangout))
            })
        //   })

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


        }).then(async (res) => {
            //   checkPermission(res).then(async (ifOk) => {
            dispatch(actions.setCurrentHangout(action.payload));

            console.log("waves", res.waves)
            dispatch(actions.setConversation(res.waves));
            dispatch(actions.setFilteredList({ list: res.waves, kindList: "filteredMessages" }));
            //debugger
            if (res.owner == getState().userName)
                dispatch(actions.setOwner(true));
            else
                dispatch(actions.setOwner(false));
            await dispatch(actions.getIdByUserName(getState().userName))
            if (res.managers.includes(getState()._id))
                dispatch(actions.setManager(true))
            else
                dispatch(actions.setManager(false))
        }).then(() => {
            dispatch(actions.getAllHangoutMembers())
            dispatch(actions.getAllContactsExceptMembers())

        })
        //   })
    }
    return next(action);
}
// function checkPermission(result) {
//     //debugger
//     return new Promise((resolve, reject) => {
//         if (result.status == "401") {
//             result.routes ?
//                 window.location.assign(`https://dev.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
//                 window.location.assign(`https://dev.leader.codes/login?des=${result.des}`)
//             reject(false)

//         }
//         resolve(true)

//     })
// }