import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeel,likeLeel, unLikeLeel } from '../../actions/leels';


export default ({ leel }) =>{
   const currentUser = useSelector((state) => state.session.currentUser);
   
    const dispatch = useDispatch();
    const handleDelete =(e)=>{
        e.preventDefault();
        dispatch(deleteLeel(leel));
    };
    const delete_button = (currentUser.username===leel.author_username) ? 
    (<>
  <button className="deletebtn" onClick={handleDelete}>Delete</button>
  </>
) : null;


    let likeButtonText ="Unlike it";
    let likeButtonAction = ()=>likeLeel(leel.id);
    if (leel.liked_by_current_user) {
        likeButtonText  = "Like it";
        likeButtonAction = () =>unLikeLeel(leel.id);
    }

    return (
        <>
        <div className="leel_row">
        <div className="avatar_post">
       <Avatar size={64} icon={<UserOutlined />} />
       </div>
        <li className="leels_show">
            <div className="post">
            
            <p className="author">{leel.author_username}</p>
            <h3 className="body_post" >{leel.body}</h3>
            <p className="like_count"><strong>Likes: 0{leel.likes}</strong></p>
            <button className="like_button" onClick={likeButtonAction}>{likeButtonText}</button>
            {delete_button}
            </div>
        </li>
        </div>
        </>
    )
    
}