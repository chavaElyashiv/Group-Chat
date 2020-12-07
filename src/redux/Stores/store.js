import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';
import { getHangoutById, getHangoutsForUser } from '../MiddleWares/conversation'
import { getContactsForUser } from '../MiddleWares/contact'


const initalStaste = {
     listConvesation: [],
     hangouts: [],
     contacts: [],
     userName: "chavae1",
     userID: "ym4MmM09W3fan5xkOw6AmxxyNba2",
     jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM",
     showContactList: false
}

const reducer = produce((state, action) => {

     switch (action.type) {
          case "SET_CONVERSATION":
               console.log("store", action.payload);
               state.listConvesation = action.payload;
               break;
          case "SET_HANGOUTS":
               debugger;
               console.log("7777777777777", action.payload);
               state.hangouts = action.payload;
               break;
          case "SET_CONTACTS":
               state.contacts = action.payload
               break;
          case "SET_SHOW_CONTACT_LIST":
               if (action.payload != undefined)
                    state.showContactList = action.payload;
               else
                    state.showContactList = !state.showContactList;
               break;
     }

}, initalStaste)
const store = createStore(reducer, applyMiddleware(getHangoutById, getHangoutsForUser, getContactsForUser))
window.store = store

export default store;

store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })

store.dispatch({ type: 'GET_CONTACTS_FOR_USER' })


