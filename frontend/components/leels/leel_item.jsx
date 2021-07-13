import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined, HeartFilled, HeartOutlined, CrownTwoTone, EditOutlined, CloseOutlined, LikeFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeel, updateLeel  } from '../../actions/leels';
import { Modal, Button, Input } from 'antd';
import PhotoEdit from './PhotoEdit';


export default ( {leel, likeLeel, unLikeLeel} ) =>{
   const currentUser = useSelector((state) => state.session.currentUser);

   const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body=leel.body,setBody] = useState();

    const dispatch = useDispatch();
    const handleDelete =(e)=>{
        e.preventDefault();
        dispatch(deleteLeel(leel));
    };

     

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);

    const nleel =Object.assign({}, {body,
    author_id:currentUser.id, id:leel.id} );
    
    dispatch(updateLeel(nleel));
    // .then(setBody(e.currentTarget.value));
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


const onChange = e => {
  setBody(e.currentTarget.value);
    };

      let likeButtonText = <HeartOutlined/>;
    let likeButtonAction = ()=>likeLeel(leel.id);
    if (leel.liked_by_current_user) {
        likeButtonText  = <HeartFilled />;
        likeButtonAction = () =>unLikeLeel(leel.id);
    }
    


const edit_button = (currentUser.username===leel.author_username) ? 
    (<>
{ (leel.photoUrls) ? (<PhotoEdit key={`leel${leel.id}`} leel = {leel} />):(
  <>
  <button className="editbtntext" onClick={showModal} ><EditOutlined /></button>
<Modal title="Edit leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
     
       <TextArea showCount maxLength={240}
            value={ body }
            placeholder={leel.body} onChange={onChange} />
      </Modal>
      </>
      )}
  </>
) : null;


    const delete_button = (currentUser.username===leel.author_username) ? 
    (<>

  <button className="deletebtn" onClick={handleDelete}><CloseOutlined /></button>
  </>
) : null;

const postPhoto = (leel.photoUrls) ? (leel.photoUrls.map((photoUrl, index) => (<p key={index}><img id="post_photo" src={photoUrl} /></p>))) : null;





    return (
        <>
        <div className="leel_row">
        <div className="avatar_post">
       <Avatar size={64} icon={<UserOutlined />} />
       </div>
       <div className="post">
        <li className="leels_show">
            
            <div className="first_line">
            <p className="author_left"> <CrownTwoTone />&nbsp;{leel.author_username} 
            </p>
            <p className="edit_right">{edit_button}
            {delete_button}</p>
            </div>
            <h3 className="body_post" >{leel.body}</h3>
            <div className="post_photo">{postPhoto}</div>
            
            <div className="like_count">
              <p className="second_left"><LikeFilled />  {leel.likes}</p>
            <p className="second_right">
            <button className="likebtnheart" onClick={likeButtonAction}>{likeButtonText}</button>
            </p>
           </div>
    
            
        </li>
        </div>
            </div>
        
        </>
    )
}
