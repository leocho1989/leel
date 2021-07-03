import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util' ;

export default ()=> (
    <div>
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route path="/" component={NavBarContainer} />
        <Route path="/login" component={LoginContainer}/>
    </div>
)