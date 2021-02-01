import produce from 'immer'
import createReducer from './ReducerUtils'

const initalStaste = {
    userName: (window.location.pathname.split('/')[1]),
    uid: '',
    _id: '',
    jwt: ''
}

const user = {
    setUid(state, action) {
        state.uid = action.payload;
    },
    setId(state, action) {
        state._id = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, user), initalStaste);

