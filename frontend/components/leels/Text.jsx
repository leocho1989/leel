import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default ()=> {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

return (

    <div className="postbtn"><img src={window.textURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Text</button>
<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>1</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
</div>


)};