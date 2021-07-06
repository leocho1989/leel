import {RECEIVE_ERROR, CLEAR_ERROR} from '../actions/error';

const errorsReducer=(state=[],action) =>{
    Object.freeze(state);
    
    switch(action.type){
        case CLEAR_ERROR:
            return [];
        case RECEIVE_ERROR:
            return action.errors;
            default:
                return state;
                  }
                 };
                
export default errorsReducer;


