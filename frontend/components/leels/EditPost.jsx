import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {updateLeel} from '../../actions/leels';



export default (leel)=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState(leel.body);

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
    
    dispatch(updateLeel(leel));
    
    // .then(setBody(""));
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {

   setBody(e.target.value);
    };



return (

    <div className="editbtn"><button className="editbtntext" onClick={showModal} >edit</button>
<Modal title="New leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 
        <TextArea showCount maxLength={240}
            value={ body }
            placeholder={leel.body} onChange={onChange} />
      </Modal>
</div>


)};