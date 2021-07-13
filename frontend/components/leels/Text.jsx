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

    <div className="postbtn"><img id="small_pic" src={window.textURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Text</button>
<Modal title="New leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 
        < TextArea className="text_area"
         showCount maxLength={240}
            value={ body }
            placeholder="Go ahead, put anything" onChange={onChange}
            autoSize={{ minRows: 5, maxRows: 6 }} />
      </Modal>
</div>


)};