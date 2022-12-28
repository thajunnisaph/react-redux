import { createStore } from 'redux';

const counterReducer = (state={counter:0},action) =>{
    if(action.type === 'increment'){
        return {
            counter:state.counter+1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter-1
        }
    }
    if(action.type === 'incrementby2'){
        return{
            counter:state.counter+2
        }
    }
    if(action.type ==='decrementby2'){
        return{
            counter:state.counter-2
        }
    }
    return state;

}

const store = createStore(counterReducer);
export default store;