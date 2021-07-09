import {postUser, deleteSession, postSession} from '../util/session';
import { receiveError, clearError } from './error';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
        type: RECEIVE_CURRENT_USER,
        user
         });




const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser=>dispatch=> postUser(formUser).then(
    user => {dispatch(receiveCurrentUser(user)); dispatch(clearError())}, error=>dispatch(receiveError(error.responseJSON)));

export const login=formUser=>dispatch=> postSession(formUser).then(user=>{dispatch(receiveCurrentUser(user)); dispatch(clearError()); }, error=>dispatch(receiveError(error.responseJSON)));

export const logout = ()=>dispatch=> deleteSession().then(()=>dispatch(logoutCurrentUser()));