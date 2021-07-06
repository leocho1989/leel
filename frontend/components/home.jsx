import React from 'react';
import {Link} from 'react-router-dom';

export default ()=> {
    
        return(
            <div className="home">
                <h1>leel</h1>
                <p>A place for you to share things!</p>
<Link className="hbtn" id="hgetstarted" to="/signup">Get Started</Link>    
<br></br>
<Link className="hbtn" id="hlogin" to="/login">Log In</Link>
<br></br>
<Link className="hbtn" id="hdemo" to="/">Demo User</Link>
</div>
        )
    };
