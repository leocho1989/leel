import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../actions/session';

export default ()=> {
    const currentUser = useSelector((state) => state.session.currentUser);

    const dispatch = useDispatch();
    

    const handleDemoUser = () => {
        dispatch(login({
            username: 'test',
            password: 'testtest',
        }));
        // window.location.reload();
    };
    return (

<button id="demobtn" to="/" onClick={handleDemoUser}>Demo User</button>
    )

}