import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchLeels} from '../../actions/leels';

// class Likes extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     componentDidMount () {

//         this.props.fetchLeels();
//     }

//     render() {
//         return (
    
//     <p>Hello</p>
    
//             )}

// }

export default ()=> {
 
    const currentUser = useSelector((state) => state.session.currentUser);


  const dispatch = useDispatch();

  dispatch(fetchLeels());

console.log(currentUser);




return (

    <div >
        <p>Hello </p>
</div>


)
};