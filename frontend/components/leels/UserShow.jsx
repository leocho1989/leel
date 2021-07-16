import React from 'react';
import {likeLeel, unLikeLeel} from '../../actions/leels';
import {fetchUsers,fetchUser} from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import LeelItem from './leel_item';
import NewPost from './new_post';
import {Redirect} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


export default()=> {
       
let location = useLocation();

const user_num = location.pathname.split('/')[2];
const nNum = parseInt(user_num);


    const dispatch = useDispatch();
    
    const leelsOb = useSelector((state)=>state.leels);
 
        dispatch(fetchUsers());

    const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);

  const currentUser = useSelector((state) => state.session.currentUser);
  

    const userLeel = (currentUser) ? (leels.filter(leel => leel.author_id===nNum)) : (<Redirect to="/login" />);
    console.log(userLeel);

 
const display = (userLeel.length > 0 ) ? (<><div className="leel_row">
    <div className="avatar_post">
        <img id="small_pic" src={window.avatarURL} />
    </div>
                
                <div className="new_post"><NewPost />
                </div>
                </div><ul>{userLeel.reverse().map(leel=>(
                    <LeelItem
                        key={`leel${leel.id}`}
                        leel = {leel}
                         likeLeel = {likeLeel}
                         unLikeLeel = {unLikeLeel} />
                         
                ))} </ul></>) : (<><div className="leel_row">
    <div className="avatar_post">
        <img id="small_pic" src={window.avatarURL} />
    </div>
                
                <div className="new_post"><NewPost />
                </div>
                </div><div className="noleels"><p>No leels yet!!</p></div></>);

             

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
