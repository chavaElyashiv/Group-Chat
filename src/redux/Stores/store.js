import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';
import { getHangoutById,setJwt, getHangoutsForUser, getUidByUserName } from '../MiddleWares/conversation'
import { getContactsForUser } from '../MiddleWares/contact'


const initalStaste = {
     listConvesation: [],
     hangouts: [],
     contacts: [],
     filteredHangouts:[],
     // userName: "chavae1",
     userName: (window.location.pathname.split('/')[1]),
     hangout: (window.location.pathname.split('/')[3]),
     // uid: 'vdQ4rhYrcJOuTNSoxLbirDG8vMJ2',
     uid: '',
     // jwt: document.cookie ? document.cookie.split(";")
     //      .filter(s => s.includes('jwt'))[0].split("=").pop() : null,
     jwt: '',
     showContactList: false
}

// try {
//      debugger
//      initalStaste.jwt = document.cookie ? document.cookie.split(";")
//           .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
// } catch (error) {
//      initalStaste.jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhUERrUlFmU01rU3BrU1FWSlRQWHFRVlQ3SWkyIiwiZW1haWwiOiJtaW5kaWZyQGdtYWlsLmNvbSIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDUxNzg4NjZ9.fm0jv-pQbTve2DPIskk0wqMNkrBSuGpGv_kLRw44lvM"
// }
// try {
//      jwt = document.cookie ? document.cookie.split(";")
//           .filter(s => s.includes('jwt'))[0].split("=").pop() : null;
// } catch (error) {
//      jwt = null
// }



const reducer = produce((state, action) => {

     switch (action.type) {
          case "SET_CONVERSATION":
               console.log("store", action.payload);
               state.listConvesation = action.payload;
               break;
          case "SET_HANGOUTS":
               debugger
               console.log("7777777777777", action.payload);
               state.hangouts = action.payload;
               break;
               case "SET_FILTERED_HANGOUTS":
                    debugger
                    console.log("!!!!!!!", action.payload);
                    state.filteredHangouts = action.payload;
                    break;
          case "SET_CONTACTS":
               state.contacts = action.payload;
               break;
          case "SET_UID":
               debugger;
               console.log("uid", action.payload);
               state.uid = action.payload
               break;
          case "SET_SHOW_CONTACT_LIST":
               if (action.payload != undefined)
                    state.showContactList = action.payload;
               else
                    state.showContactList = !state.showContactList;
               break;
     }

}, initalStaste)
const store = createStore(reducer, applyMiddleware(setJwt,getUidByUserName, getHangoutById, getHangoutsForUser, getContactsForUser))
window.store = store

export default store;

store.dispatch({ type: 'SET_JWT' })
store.dispatch({ type: 'GET_UID_BY_USER_NAME' })


// store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })

// store.dispatch({ type: 'GET_CONTACTS_FOR_USER' })

