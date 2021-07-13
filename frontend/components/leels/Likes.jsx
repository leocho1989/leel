import React, {useState} from 'react';
import {fetchLeels, likeLeel, unLikeLeel} from '../../actions/leels';
import { useDispatch, useSelector } from 'react-redux';
import LeelItem from './leel_item';


export default()=> {

    const dispatch = useDispatch();
    
    const leelsOb = useSelector((state)=>state.leels);
    console.log(leelsOb);

    const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);

  

    const liked = leels.filter(leel => leel.liked_by_current_user===true);

   
const display = (liked.length > 0) ? (liked.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {likeLeel}
                         unLikeLeel = {unLikeLeel} />
                         
                )) ) : (<div className="nolikes"><p>No likes yet!!</p></div>);

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
