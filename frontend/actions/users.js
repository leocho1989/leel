export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";


import * as UserAPIUtil from "../util/users";

export const receiveUsers = users =>({
    // debugger
    type:RECEIVE_USERS,
    users
});

export const receiveUser = user => ({
    type:RECEIVE_USER,
    user
});

export const fetchUsers =() =>dispatch =>(
    
    UserAPIUtil.getUsers()
    // debugger
    .then(users=>dispatch(receiveUsers(users)))
);

export const fetchUser =id=>dispatch=>(
    UserAPIUtil.getUser(id)
    .then(user => dispatch(receiveLeel(user)))
     );
    