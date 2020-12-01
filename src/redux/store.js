import {createStore} from 'redux';
import produce from 'immer';


const initalStaste={
     listConvesation:[]
}

const reducer=produce((state,action)=>{

switch(action.type){
case "SET_CONVERSATION":
     console.log(action.payload.waves);
    state.listConvesation =action.payload.waves
}

},initalStaste)
const store= createStore(reducer)
window.store = store
export default store;


