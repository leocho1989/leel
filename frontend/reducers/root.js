import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';
import leelsReducer from './leels';

export default combineReducers({
    leels: leelsReducer,
    session: sessionReducer,
    errors: errorsReducer
     });

