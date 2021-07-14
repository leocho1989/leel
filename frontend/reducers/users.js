import {RECEIVE_USERS, RECEIVE_USER} from '../actions/users';

const usersReducer =(state={},action) =>{

    Object.freeze(state);
    // let nextState = {};

    switch(action.type){
        case RECEIVE_USERS:
        const users ={};
        // debugger
        action.users.forEach(userOb=>{
            userOb.forEach(user =>{users[user.id]=user;});
            // debugger  
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
