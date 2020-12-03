import { createStore, applyMiddleware } from 'redux';
import produce from 'immer';
import { getHangoutById, getHangoutsForUser } from '../MiddleWares/conversation'


const initalStaste = {
     listConvesation: [],
     hangouts: [],
     userID: "chavae1"

     
}

const reducer = produce((state, action) => {

     switch (action.type) {
          case "SET_CONVERSATION":
               console.log("store",action.payload.waves);
               state.listConvesation = action.payload.waves
               break;
          case "SET_HANGOUTS":
               debugger
               console.log("7777777777777", action.payload);
               state.hangouts = action.payload.hangouts
               break;
     }

}, initalStaste)
const store = createStore(reducer, applyMiddleware(getHangoutById, getHangoutsForUser))
window.store = store

export default store;
debugger
store.dispatch({ type: 'GET_HANGOUTS_FOR_USER' })


