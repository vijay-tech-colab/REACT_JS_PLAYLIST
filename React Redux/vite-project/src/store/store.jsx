import {createStore} from 'redux';

const initialState = {
    counter : 100
}
const reducerFun = (state = initialState,action) => {
    if(action.type === "increment"){
        return {counter : state.counter + 1}
    }
    if(action.type === "decrement"){
        return {counter : state.counter - 1}
    }
    if(action.type =="increase"){
        return {counter : state.counter + action.num}
    }
    return state
}

const store = createStore(reducerFun);

export default store;
