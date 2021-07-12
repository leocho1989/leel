import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import {photoLeel} from '../../actions/leels';



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

  // console.log(photos);
  // console.log(photoFiles);
  if (photos) {

    for (let i = 0; i <photos.length; i++) {
      formData.append('photos[]', photos[i]);
      // console.log(formData);
    }
  }
    // formData.append('photos', photoFile);
  
  
  
  
    
   dispatch(photoLeel(formData))
   .then(setBody("")).then(setPhotoFiles(null));
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


    const preview = (photoUrls.length > 0)? (photoUrls.map(photoUrl=>(<img id="preview_pic" src={photoUrl} key={photoUrl} />))) : null;
    


return (

    <div className="postbtn"><img id="small_pic" src={window.cameraURL} onClick={showModal} /><button className="textbtn" onClick={showModal} >Photo</button>
<Modal title="Share photos" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
  <input type="file" onChange={handleFile} multiple={true} />
<h3>Image preview</h3>
{preview}
        <TextArea showCount maxLength={240}
            value={ body }
            placeholder="add description for your photos" onChange={onChange} />
      </Modal>
</div>


)};