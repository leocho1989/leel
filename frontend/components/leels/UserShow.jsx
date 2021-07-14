import React, {useState} from 'react';
import {fetchLeels, likeLeel, unLikeLeel} from '../../actions/leels';
import { useDispatch, useSelector } from 'react-redux';
import LeelItem from './leel_item';


export default()=> {

    const dispatch = useDispatch();
    
    const leelsOb = useSelector((state)=>state.leels);
    console.log(leelsOb);

    const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);

  const currentUser = useSelector((state) => state.session.currentUser);

    const userLeel = leels.filter(leel => leel.author_username===currentUser.username);

   
const display = (userLeel.length > 0) ? (userLeel.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {likeLeel}
                         unLikeLeel = {unLikeLeel} />
                         
                )) ) : (<div className="noleels"><p>You don't have any leels yet!!</p></div>);

        return (
    
   <>
            <div className="leels">
                <div className="leel_row"> 
                </div>
                
                
                <ul>

            {display
                }
                </ul>
            </div>
            </>
    

)}
