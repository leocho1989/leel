import {RECEIVE_USERS, RECEIVE_USER} from '../actions/users';

const usersReducer =(state={},action) =>{

    Object.freeze(state);

    switch(action.type){
        case RECEIVE_USERS:
        const users ={};
        // debugger
        action.users.forEach(user=>{
            users[user.id]=user;
        });
        return users;
        case RECEIVE_USER:
        return Object.assign({},state,{
            [action.user.id]:action.user
        });
        default:
        return state;
         }
};

export default usersReducer;
