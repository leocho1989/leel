import { RECEIVE_LEELS, RECEIVE_LEEL, REMOVE_LEEL, LEEL_ERROR} from '../actions/leels';

const leelsReducer = (state={}, action) =>{
    Object.freeze(state);
    let nextState = {};
    
    switch(action.type){
        case RECEIVE_LEELS:
        const leels = {};
        action.leels.forEach(leel=>{
            leels[leel.id] = leel;
             });
            return leels;
            case RECEIVE_LEEL:
            return Object.assign({}, state, {
            [action.leel.id]: action.leel
            });
            case REMOVE_LEEL:
                nextState = Object.assign({}, state);
                delete nextState[action.leel.id];
                return nextState;
            default:
             return state;
               }
              };
              export default leelsReducer;
                  
