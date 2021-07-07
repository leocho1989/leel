import React from 'react';
import {useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


export default ()=> {
    const currentUser = useSelector((state) => state.session.currentUser);


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

<Link className="hbtn" id="hdemo" to="/">Demo User</Link>
</div>
        )
    };
