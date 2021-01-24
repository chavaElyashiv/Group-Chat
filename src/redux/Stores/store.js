


import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';
import { getUsernameReturnEmail, returnUsersId, newHangout, getHangoutById, setJwt, getHangoutsForUser, getUidByUserName, addNewWave, getIdByUserName, getManagerPermission, removeMemberByManager } from '../MiddleWares/conversation'
import { getContactsForUser, getAllContactsExceptMembers, AddContactsToHangout, getAllHangoutMembers, setShow } from '../MiddleWares/contact'


const initalStaste = {
     listConvesation: [],
     hangouts: [],
     hangoutsContacts: [],
     contacts: [],
     userName: (window.location.pathname.split('/')[1]),
     hangout: (window.location.pathname.split('/')[3]),
     uid: '',
     _id: '',
     jwt: '',
     showContactList: false,
     showMembersList: false,
     showNewHangout: false,
     showMessagesList: false,
     filteredContacts: [],
     filteredMessages: [],
     filteredMembers: [],
     filteredAddContacts: [],
     members: [],
     messageInput: '',
     manager: false,
     managersList: [],
     owner: false
}




const reducer = produce((state, action) => {

     switch (action.type) {
          case "SET_CONVERSATION":
               console.log("store", action.payload);
               state.listConvesation = action.payload;
               break;
          case "SET_HANGOUTS":
               state.hangouts = action.payload;
               break;

          case "SET_FILTERED_LIST":

               if (action.payload.kindList == "filteredContacts")
                    state.filteredContacts = action.payload.list;
               else if (action.payload.kindList == "filteredHangouts")
                    state.filteredHangouts = action.payload.list;
               else if (action.payload.kindList == "filteredMessages")
                    state.filteredMessages = action.payload.list;
               else if (action.payload.kindList == "filteredMembers")
                    state.filteredMembers = action.payload.list;
               else if (action.payload.kindList == "filteredAddContacts")
                    state.filteredAddContacts = action.payload.list;

               break;
          case "SET_FILTERED_HANGOUTS":
               console.log("!!!!!!!", action.payload);
               state.filteredHangouts = action.payload;
               break;
          case "ADD_WAVE":
               state.hangouts.push(action.payload);
               break;
          case "ADD_NEW_HANGOUT":
               state.hangouts.push(action.payload);
               break;
          case "SET_HANGOUTS_CONTACTS":
               state.hangoutsContacts = action.payload;
               break;
          case "SET_CONTACTS":
               state.contacts = action.payload;
               break;
          case "ADD_MEMBER":
               state.members.push(action.payload);
               break;

          case "SET_UID":
               ;
               console.log("uid", action.payload);
               state.uid = action.payload
               break;

          case "SET_SHOW_NEW_HANGOUT":
               if (action.payload != undefined)
                    state.showNewHangout = action.payload;
               else
                    state.showNewHangout = !state.showNewHangout;
               break;
          case "SET_SHOW_CONTACT_LIST":
               if (action.payload != undefined)
                    state.showContactList = action.payload;
               else
                    state.showContactList = !state.showContactList;
               break;

          case "SET_SHOW_MESSAGES_LIST":
               if (action.payload != undefined)
                    state.showMessagesList = action.payload;
               else
                    state.showMessagesList = !state.showMessagesList;
               break;
          case "SET_SHOW_MEMBERS_LIST":
               if (action.payload != undefined)
                    state.showMembersList = action.payload;
               else
                    state.showMembersList = !state.showMembersList;
               break;
          case "SET_CURRENT_HANGOUT":

               state.hangout = action.payload;
               break;
          case "SET_MEMBERS":

               state.members = action.payload;
               break;
          case "SET_MESSAGE_INPUT":

               state.messageInput = action.payload;
               break;
          case "SET_MANAGER":
               state.manager = action.payload;
               break;
          case "SET_OWNER":
               state.owner = action.payload;
               break;
          case "SET_ID":
               state._id = action.payload;
               break;
          case "SET_MANAGERS_LIST":
               state.managersList = action.payload;
               break;

     }

}, initalStaste)
const store = createStore(reducer, applyMiddleware(setJwt, getUsernameReturnEmail, returnUsersId, getUidByUserName, newHangout, getHangoutById, getHangoutsForUser, getAllContactsExceptMembers, getContactsForUser, AddContactsToHangout, getAllHangoutMembers, addNewWave, setShow, getIdByUserName, getManagerPermission, removeMemberByManager))
window.store = store

export default store;

store.dispatch({ type: 'SET_JWT' })
store.dispatch({ type: 'GET_UID_BY_USER_NAME' })


// store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })

// store.dispatch({ type: 'GET_CONTACTS_FOR_USER' })














