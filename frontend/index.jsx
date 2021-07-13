import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',()=>{
    const root= document.getElementById("root");
    let preloadedState;
    

    if (window.current_user) {
        preloadedState= {
            session: {
                currentUser: window.current_user
            }
            
        };
    }

    const store = createStore(preloadedState);
    
    
    ReactDOM.render(<Root store={store}/>, root);

});