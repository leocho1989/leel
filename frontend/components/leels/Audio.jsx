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

    <div className="postbtn"><img src={window.headphonesURL} onClick={showModal} /><button onClick={showModal} >Audio</button>
<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>6</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
</div>


)};