import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';
import leelsReducer from './leels';
import usersReducer from './users';

export default combineReducers({
    leels: leelsReducer,
    session: sessionReducer,
    errors: errorsReducer,
    users: usersReducer
     });

