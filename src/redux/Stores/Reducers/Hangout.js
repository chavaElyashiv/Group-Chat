import produce from 'immer'
import createReducer from './ReducerUtils'

const initalStaste = {
    listConvesation: [],
    hangouts: [],
    hangout: (window.location.pathname.split('/')[3]),
    showMembersList: false,
    showNewHangout: false,
    showMessagesList: false,
    members: [],
    messageInput: '',
    manager: false,
    managersList: [],
    owner: false,
    pictures: []
}

const hangout = {
    setConversation(state, action) {
        state.listConvesation = action.payload;
    },
    setHangouts(state, action) {
        state.hangouts = action.payload;
    },
    addWave(state, action) {
        state.listConvesation.push(action.payload);
    },
    addNewHangout(state, action) {
        state.hangouts.push(action.payload);
    },
    addMember(state, action) {
        state.members.push(action.payload);
    },
    setShowNewHangout(state, action) {
        if (action.payload != undefined)
            state.showNewHangout = action.payload;
        else
            state.showNewHangout = !state.showNewHangout;
    },
    setShowMessagesList(state, action) {
        if (action.payload != undefined)
            state.showMessagesList = action.payload;
        else
            state.showMessagesList = !state.showMessagesList;
    },
    setShowMembersList(state, action) {
        if (action.payload != undefined)
            state.showMembersList = action.payload;
        else
            state.showMembersList = !state.showMembersList;
    },
    setCurrentHangout(state, action) {
        state.hangout = action.payload;
    },
    setMessageInput(state, action) {
        state.messageInput = action.payload;
    },
    setManager(state, action) {
        state.manager = action.payload;
    },
    setOwner(state, action) {
        state.owner = action.payload;
    },
    setManagersList(state, action) {
        state.managersList = action.payload;
    }


}

export default produce((state, action) => createReducer(state, action, hangout), initalStaste);

