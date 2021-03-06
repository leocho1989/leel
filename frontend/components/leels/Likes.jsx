import React from 'react';
// import {fetchLeels, likeLeel, unLikeLeel} from '../../actions/leels';
import { useDispatch, useSelector } from 'react-redux';
import LeelItem from './leel_item';
import {Redirect} from 'react-router-dom';

export default()=> {

    const dispatch = useDispatch();
    
    const leelsOb = useSelector((state)=>state.leels);
    // console.log(leelsOb);
    const currentUser = useSelector((state) => state.session.currentUser);

    const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);

  

    const liked = leels.filter(leel => leel.liked_by_current_user===true);

   
const display = (liked.length > 0) ? (<><div className="likes_num"><p>Likes: {liked.length}</p></div><ul> {liked.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         />
                         
                )) }</ul></>) : (<div className="nolikes"><p>No likes yet!!</p></div>);

        return (
    
   <>
            <div className="leels">
                <div className="leel_row"> 
                </div>
                
                
                <ul>

            {(currentUser) ? (display): (<Redirect to="/login" />)
                }
                </ul>
            </div>
            </>
    

)}
