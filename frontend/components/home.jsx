import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../actions/session';


export default ()=> {
    const currentUser = useSelector((state) => state.session.currentUser);

    const dispatch = useDispatch();
    

    const handleDemoUser = () => {
        dispatch(login({
            username: 'test',
            password: 'testtest',
        }));
    };


    if (currentUser)
    {
        return (<Redirect to="/leel_posts" />);
    }
        return(
            <div className="home">
                <h1>leel</h1>
                <p>A place for you to share things!</p>
<Link className="hbtn" id="hgetstarted" to="/signup">Get Started</Link>    

<Link className="hbtn" id="hlogin" to="/login">Log In</Link>

<Link className="hbtn" id="hdemo" to="/" onClick={handleDemoUser}>Demo User</Link>
</div>
        )
    };
