import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util' ;

export default ()=> (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer}/>
    </div>
)