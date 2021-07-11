import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined, HeartFilled, HeartOutlined, CrownTwoTone, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeel, updateLeel } from '../../actions/leels';
import { Modal, Button, Input } from 'antd';


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

  <button className="editbtntext" onClick={showModal} ><EditOutlined /></button>
<Modal title="Edit leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 
        <TextArea showCount maxLength={240}
            value={ body }
            placeholder={leel.body} onChange={onChange} />
      </Modal>
  </>
) : null;


    const delete_button = (currentUser.username===leel.author_username) ? 
    (<>

  <button className="deletebtn" onClick={handleDelete}><CloseOutlined /></button>
  </>
) : null;


    return (
        <>
        <div className="leel_row">
        <div className="avatar_post">
       <Avatar size={64} icon={<UserOutlined />} />
       </div>
        <li className="leels_show">
            <div className="post">
            
            <p className="author"> <CrownTwoTone />&nbsp;{leel.author_username}</p>
            <h3 className="body_post" >{leel.body}</h3>
            
            <div className="like_delete_btn" >
              {edit_button}
            {delete_button}
            <button className="likebtnheart" onClick={likeButtonAction}>{likeButtonText}</button>
            
            </div>
            </div>
        </li>
        </div>
        </>
    )
}
