import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {createLeel} from '../../actions/leels';
// import ErrorList from './ErrorList';


export default ()=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");

  const dispatch = useDispatch();

 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);

    // dispatch(createLeel({leel: body}));

    const leel =Object.assign({}, {body,
    author_id:window.current_user.id} );
    
    dispatch(createLeel(leel));

    // window.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {

   setBody(e.target.value);
    };



return (

    <div className="postbtn"><img src={window.textURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Text</button>
<Modal title="New leel" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  {/* <ErrorList errors={errors} /> */}
        <TextArea showCount maxLength={240}
            value={ body }
            placeholder="Go ahead, put anything" onChange={onChange} />
      </Modal>
</div>


)};