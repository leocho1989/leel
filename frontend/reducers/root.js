import {combineReducers} from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';
// import entitiesReducer from './entities';

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
     });

