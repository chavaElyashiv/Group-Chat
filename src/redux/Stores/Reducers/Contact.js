import produce from 'immer'
import createReducer from './ReducerUtils'

const initalStaste = {
    hangoutsContacts: [],
    contacts: [],
    showContactList: false
}

const contacts = {
    setHangoutsContacts(state, action) {
        state.hangoutsContacts = action.payload;
    },
    setContacts(state, action) {
        state.contacts = action.payload;
    },
    setShowContactList(state, action) {
        if (action.payload != undefined)
            state.showContactList = action.payload;
        else
            state.showContactList = !state.showContactList;
    }
}

export default produce((state, action) => createReducer(state, action, contacts), initalStaste);

