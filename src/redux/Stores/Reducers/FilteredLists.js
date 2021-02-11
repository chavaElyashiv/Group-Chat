import produce from 'immer'
import createReducer from './ReducerUtils'

const initalStaste = {
    filteredContacts: [],
    filteredAddContacts: [],
    filteredMessages: [],
    filteredMembers: [],
    filteredHangouts: []
}

const filteredList = {
    setFilteredList(state, action) {
        debugger
        if (action.payload.kindList == "filteredContacts")
            state.filteredContacts = action.payload.list;
        else if (action.payload.kindList == "filteredHangouts") {
            debugger
            state.filteredHangouts = action.payload.list;
        }
        else if (action.payload.kindList == "filteredMessages")
            state.filteredMessages = action.payload.list;
        else if (action.payload.kindList == "filteredMembers") {
            debugger
            state.filteredMembers = action.payload.list;
        }
        else if (action.payload.kindList == "filteredAddContacts")
            state.filteredAddContacts = action.payload.list;
    }
}

export default produce((state, action) => createReducer(state, action, filteredList), initalStaste);
