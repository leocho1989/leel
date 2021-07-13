import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {createLeel} from '../../actions/leels';



export default ()=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");
const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.currentUser);


 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);

    

    const leel =Object.assign({}, {body, title,
    author_id:currentUser.id} );
    
    dispatch(createLeel(leel)).then(setBody("")).then(setTitle(""));
    
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


return (

    <div className="postbtn"><img id="small_pic" src={window.quotationURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Quote</button>
<Modal title="A quote for today" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
 <Input 
        value={title}
        placeholder="Quote here" 
        onChange={onChangeT}/>
        <TextArea 
        showCount maxLength={100}
            value={ body }
            placeholder="- Source" onChange={onChangeB}
            autoSize={{ minRows: 1, maxRows: 2 }} />
      </Modal>
</div>


)};