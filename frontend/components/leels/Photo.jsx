import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {photoLeel} from '../../actions/leels';
import { EditOutlined, MinusCircleFilled } from '@ant-design/icons';



export default ()=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");
  const [photoFiles, setPhotoFiles] = useState(null);
  const [photoUrls,setPhotoUrls] = useState([]);


  const [photos, setPhotos] = useState(null);
  
  

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.currentUser);


 

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
    const formData = new FormData();

  formData.append('body', body);
  formData.append('author_id', currentUser.id);

  
  if (photos) {

    for (let i = 0; i <photos.length; i++) {
      formData.append('photos[]', photos[i]);
     
    }
  }

    
    
   dispatch(photoLeel(formData))
   .then(setBody("")).then(setPhotoUrls([]));
   };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onChange = e => {

   setBody(e.target.value);
    };

    const handleFile = e=>{

      setPhotos(e.currentTarget.files);
      

      for (let i=0; i < e.currentTarget.files.length; i++) {
        photoUrls.push(URL.createObjectURL(e.currentTarget.files[i]));
      }
      setPhotoFiles(e.currentTarget.files);
      
      };

    const handleDelete = index =>{
        photoUrls.splice(index,1);
        setPhotoUrls(photoUrls);
        setBody(body);
      //  console.log(photoUrls);
  
        
      };

    // const preview = (photoUrls.length > 0)? (photoUrls.map(photoUrl=>(<img id="preview_pic" src={photoUrl} key={photoUrl} />))) : null;

        const preview = (photoUrls.length > 0)? 
      (photoUrls.map((photoUrl,index)=>(<div key={index}>
      <p ><img id="preview_pic" src={photoUrl} /> <button className="delete_photo" key={photoUrl} onClick={()=>handleDelete(index)}><MinusCircleFilled /></button></p>
      </div> ))) : null;
    


return (

    <div className="postbtn"><img id="small_pic" src={window.cameraURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Photo</button>
<Modal title="Share photos" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

		<div className="upload_title">
			<h1 className = "upload_text">Drop file to upload</h1>
		</div>

		<div className="dropzone">
			<img src={window.uploadURL} 
      className="upload-icon" />
			<input type="file" className="upload-input"  onChange={handleFile} multiple={true} key={Date.now()}/>
		</div>
<br />
{preview}
        <TextArea 
        showCount maxLength={150}
            value={ body }
            placeholder="add description for your photos" onChange={onChange}
            autoSize={{ minRows: 3, maxRows: 4 }} />
      </Modal>
</div>


)};