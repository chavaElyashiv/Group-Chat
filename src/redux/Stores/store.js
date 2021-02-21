import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './Reducers/User'
import contactsReducer from './Reducers/Contact'
import hangoutReducer from './Reducers/Hangout'
import filteredListReducer from './Reducers/FilteredLists'
import { getUsernameReturnEmail, returnUsersId, newHangout, getHangoutById, setJwt, getHangoutsForUser, getUidByUserName, addNewWave, getIdByUserName, getManagerPermission, removeMemberByManager, exitHangout, deleteHangout, joinHangout } from '../MiddleWares/conversation'
import { getContactsForUser, getAllContactsExceptMembers, AddContactsToHangout, getAllHangoutMembers, setShow } from '../MiddleWares/contact'

const reducer = combineReducers({ userReducer, contactsReducer, hangoutReducer, filteredListReducer });

const store = createStore(reducer, applyMiddleware(setJwt, getUsernameReturnEmail, returnUsersId, getUidByUserName, newHangout, getHangoutById, getHangoutsForUser, getAllContactsExceptMembers, getContactsForUser, AddContactsToHangout, getAllHangoutMembers, addNewWave, setShow, getIdByUserName, getManagerPermission, removeMemberByManager, exitHangout, deleteHangout, joinHangout))
window.store = store

export default store;
//debugger;
store.dispatch({ type: 'SET_JWT' })
store.dispatch({ type: 'GET_UID_BY_USER_NAME' })
//store.dispatch({ type: 'CHECK_JOIN_HANGOUT' })


// store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })

// store.dispatch({ type: 'GET_CONTACTS_FOR_USER' })














