import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default ({currentUser, logout, ...props}) =>{

    let location = useLocation();


    const display = currentUser ? (
        <div>
            <p>{currentUser.username}</p>
            <button onClick={logout}>Log out</button>
        </div>
    ):(
        <div>
            {(location.pathname === '/login' || location.pathname === '/' || location.pathname === '/leel_posts') && <Link className="button" id="signup" to="/signup">Sign Up</Link>}
            {(location.pathname === '/signup' || location.pathname === '/' || location.pathname === '/leel_posts') &&<Link className="button" id="login" to="/login">Log in</Link>}
        </div>
    );
 

    return (
        <header className="nav-bar">
            <Link className="logo" to="/">leel</Link>
            <div>
                {display}
                 
            </div>

        </header>
    )
}