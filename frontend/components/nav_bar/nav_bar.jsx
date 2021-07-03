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
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/login">Log in</Link>
        </div>
    );
    return (
        <header className="nav-bar">
            <h1 className="logo">leel</h1>
            <div>
                {display}
                 
            </div>

        </header>
    )
}