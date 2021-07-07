import { RECEIVE_LEELS, RECEIVE_LEEL} from '../actions/leels';

const leelsReducer = (state={}, action) =>{
    Object.freeze(state);
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
            default:
             return state;
               }
              };
              export default leelsReducer;
                  
