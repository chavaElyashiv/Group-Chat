import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';
import { getHangoutById, setJwt, getHangoutsForUser, getUidByUserName ,addNewWave} from '../MiddleWares/conversation'
import { getContactsForUser, AddContactsToHangout, getAllHangoutMembers } from '../MiddleWares/contact'


const initalStaste = {
     listConvesation: [],
     hangouts: [],
     contacts: [],
     userName: (window.location.pathname.split('/')[1]),
     hangout: (window.location.pathname.split('/')[3]),
     uid: '',
     jwt: '',
     showContactList: false,
     showMembersList: false,

     members: []
}




const reducer = produce((state, action) => {

     switch (action.type) {
          case "SET_CONVERSATION":
               console.log("store", action.payload);
               state.listConvesation = action.payload;
               break;
          case "SET_HANGOUTS":
               //debugger
               console.log("7777777777777", action.payload);
               state.hangouts = action.payload;
               break;
               case "SET_FILTERED_HANGOUTS":
                    debugger
                    console.log("!!!!!!!", action.payload);
                    state.filteredHangouts = action.payload;
                    break;
          case "ADD_WAVE":
               //debugger
               console.log("7777777777777", action.payload);
               state.hangouts.push(action.payload);
               break;
          case "SET_CONTACTS":
               state.contacts = action.payload;
               break;
          case "ADD_MEMBER":
               state.members.push(action.payload);
               break;

          case "SET_UID":
               //debugger;
               console.log("uid", action.payload);
               state.uid = action.payload
               break;
          case "SET_SHOW_CONTACT_LIST":
               debugger
               if (action.payload != undefined)
                    state.showContactList = action.payload;
               else
                    state.showContactList = !state.showContactList;
               break;
          case "SET_SHOW_MEMBERS_LIST":
               debugger
               if (action.payload != undefined)
                    state.showMembersList = action.payload;
               else
                    state.showMembersList = !state.showMembersList;
               break;
          case "SET_CURRENT_HANGOUT":
               //debugger;
               state.hangout = action.payload;
               break;
          case "SET_MEMBERS":
               //debugger;
               state.members = action.payload;
               break;
     }

}, initalStaste)
const store = createStore(reducer, applyMiddleware(setJwt, getUidByUserName, getHangoutById, getHangoutsForUser, getContactsForUser, AddContactsToHangout, getAllHangoutMembers,addNewWave))
window.store = store

export default store;

store.dispatch({ type: 'SET_JWT' })
store.dispatch({ type: 'GET_UID_BY_USER_NAME' })


// store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })

// store.dispatch({ type: 'GET_CONTACTS_FOR_USER' })

