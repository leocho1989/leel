import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, SIGNUP_ERROR} from '../actions/session';

const _nullSession = {
    currentUser: null
};

export default (state=_nullSession, action) =>{
    Object.freeze(state);
    switch(action.type) {
        case SIGNUP_ERROR:
            alert(3)
            return {
                missing: action.user.responseJSON
            }
   
        case RECEIVE_CURRENT_USER:
            alert(123);
        const currentUser = action.user;
        return Object.assign({},{currentUser});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
            default:
            return state;
              }
             
    };
