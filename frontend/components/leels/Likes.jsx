import React, {useState} from 'react';
import {fetchLeels, likeLeel, unLikeLeel} from '../../actions/leels';
import { useDispatch, useSelector } from 'react-redux';
import LeelItem from './leel_item';


export default()=> {

    const dispatch = useDispatch();
    
    const leelsOb = useSelector((state)=>state.leels);
    console.log(leelsOb);

    const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);

    console.log(leels);

    const liked = leels.filter(leel => leel.liked_by_current_user===true);

    console.log(liked);

    // const liked_leel = (leel.liked_by_current_user) ? (<LeelItem
    // key={`leel${leel.id}`}
    // leel = {leel}
    // likeLeel = {likeLeel}
    // unLikeLeel = {unLikeLeel} />) : null;

        return (
    
   <>
            <div className="leels">
                <div className="leel_row"> 
                </div>
                
                
                <ul>

            {liked.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {likeLeel}
                         unLikeLeel = {unLikeLeel} />
                         
                )) 
                }
                </ul>
            </div>
            </>
    

)}
