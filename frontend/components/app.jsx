import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util' ;
import home from './home';

export default ()=> (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer}/>
    </div>
)