import React from 'react';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import LeelIndexContainer from './leels/leel_index_container';
import Likes from './leels/Likes';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util' ;
import Home from './home';
import UserShow from './leels/UserShow';
import Footer from './nav_bar/footer';

export default ()=> (
    <div className="page">
        
        <NavBarContainer />
       
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer}/>
        <ProtectedRoute path="/leel_posts" component={LeelIndexContainer} />
        <Route path="/likes" component={Likes} />
        <Route path="/users/:id" component={UserShow} />
       
         <Footer />
    </div>
)