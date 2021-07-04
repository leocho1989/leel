import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) =>{
    const display = currentUser ? (
        <div>
            <p>{currentUser.username}</p>
            <button onClick={logout}>Logout!</button>
        </div>
    ):(
        <div>
            <Link className="button" id="signup" to="/signup">Sign Up</Link>
            <Link className="button" id="login" to="/login">Log in</Link>
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