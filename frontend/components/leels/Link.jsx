import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {createLeel} from '../../actions/leels';



export default ()=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.currentUser);


 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);

    

    const leel =Object.assign({}, {body,
    author_id:currentUser.id} );
    
    dispatch(createLeel(leel)).then(setBody(""));
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {

   setBody(e.target.value);
    };




return (

    <div className="postbtn"><img id="small_pic" src={window.httpURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >&nbsp;Link</button>
<Modal title="Share a Link" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 
        <input 
        showCount maxLength={150} 
        className="link_input" 
        type="url" 
            value={ body }
            placeholder="Put the link you want to share..." onChange={onChange} />
      </Modal>
</div>


)};
