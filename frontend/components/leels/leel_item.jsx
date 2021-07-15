import React, { useState } from 'react';
import { Avatar, Dropdown, Card } from 'antd';
import { UserOutlined, HeartFilled, HeartOutlined, CrownTwoTone, EditOutlined, CloseOutlined, LikeFilled, UserAddOutlined,UserDeleteOutlined, IdcardOutlined, GlobalOutlined,TeamOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeel, updateLeel, likeLeel, unLikeLeel,followLeeler, unFollowLeeler  } from '../../actions/leels';
import { Modal, Button, Input } from 'antd';
import PhotoEdit from './PhotoEdit';


export default ( {leel} ) =>{

  const dispatch = useDispatch();

  // dispatch(fetchUsers());
   const currentUser = useSelector((state) => state.session.currentUser);
   const usersOb = useSelector((state) => state.users);
   const users = Object.keys(usersOb).map(key=>usersOb[key]);
  //  console.log(usersOb);
  //  console.log(users);

   const user = users.filter(userOb=>userOb.username===leel.author_username);

  //  users.forEach((userOb) => {
  //    if (userOb.username === leel.author_username) {
  //       user = userOb;
  //    }
  //  });

   console.log(user);

   const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body=leel.body,setBody] = useState();
  const [title=leel.title, setTitle] = useState();


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

    const nleel =Object.assign({}, {body, title,
    author_id:currentUser.id, id:leel.id} );
    
    dispatch(updateLeel(nleel));
    // .then(setBody(e.currentTarget.value));
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onChangeT = e => {

   
   setTitle(e.target.value);
    };

    const onChangeB = e => {

   setBody(e.target.value);
   
    };

      let likeButtonText = <HeartOutlined/>;
    let likeButtonAction = ()=>dispatch(likeLeel(leel.id));
    if (leel.liked_by_current_user) {
        likeButtonText  = <HeartFilled />;
        likeButtonAction = () =>dispatch(unLikeLeel(leel.id));
    }
    
         let followButtonText = <UserAddOutlined />;
    let followButtonAction = ()=>dispatch(followLeeler(leel.author_id));
    if (user.followed_by_current_user) {
        followButtonText  = <UserDeleteOutlined />;
        followButtonAction = () =>dispatch(unFollowLeeler(leel.author_id));
    }


const edit_button = (currentUser.username===leel.author_username) ? 
    (<>
{ (leel.photoUrls) ? (<PhotoEdit key={`leel${leel.id}`} leel = {leel} />):(
  <>
  <button className="editbtntext" onClick={showModal} ><EditOutlined /></button>
<Modal title="Edit leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  <Input 
        value={title}
        placeholder="Title(optional)" 
        onChange={onChangeT}/>
     
       <TextArea showCount maxLength={240}
            value={ body }
            placeholder={leel.body} onChange={onChangeB}
            autoSize={{ minRows: 5, maxRows: 6 }} />
            
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



 const userinfo =  
 <>
 <Card style={{ width: 180 }}>
   
   <div className="avatar_post_popup">
        <img id="small_pic" src={window.avatarURL} />
    </div>
    <br></br>
    <p className="popupcard"><IdcardOutlined />&nbsp;&nbsp;{leel.author_username}</p>
   <a href={`/#/users/${leel.author_id}`}><GlobalOutlined />&nbsp;Homepage</a>
      <p><TeamOutlined />&nbsp;Followings:</p>
      
    </Card>
    </>




    return (
        <>
        <div className="leel_row">
           
        <div className="avatar_post">
          <Dropdown overlay={userinfo}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <Avatar size={64} icon={<UserOutlined />} />
    </a>
  </Dropdown>
       </div>
       <div className="post">
        <li className="leels_show">
           
            <div className="first_line">
            <p className="author_left"> <CrownTwoTone />&nbsp;{leel.author_username}&nbsp;&nbsp; <button className="followbtn" onClick={followButtonAction}>{followButtonText}</button>
            </p>
            <p className="edit_right">{edit_button}
            {delete_button}</p>
            </div>
            <h3 className="title_post" >{leel.title}</h3>
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
