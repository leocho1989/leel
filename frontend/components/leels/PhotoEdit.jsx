import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import { updateLeelPhoto} from '../../actions/leels';
import { EditOutlined } from '@ant-design/icons';



export default ({leel})=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");
  const [photoFiles, setPhotoFiles] = useState(null);
  const [photoAdds,setPhotoAdds] = useState(leel.photoUrls);
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
  formData.append('id',leel.id);
 

 if (photos) {

    for (let i = 0; i <photos.length; i++) {
      formData.append('photos[]', photos[i]);
     
    }
  }

  console.log(formData.get('id'));


   dispatch(updateLeelPhoto(formData))
   .then(setBody("")).then(setPhotoAdds([]));
   };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onChange = e => {
    leel.body = e.target.value;
   setBody(e.target.value);
    };

    const handleFile = e=>{

      setPhotos(e.currentTarget.files);
      

      for (let i=0; i < e.currentTarget.files.length; i++) {
        photoAdds.push(URL.createObjectURL(e.currentTarget.files[i]));
      }
      setPhotoFiles(e.currentTarget.files);
      
      };


    const preview = (leel.photoUrls.length > 0)? 
      (leel.photoUrls.map(photoUrl=>(<img id="preview_pic" src={photoUrl} key={photoUrl} />))) : null;


return (

    <>
  <button className="editbtntext" onClick={showModal} ><EditOutlined /></button>
<Modal title="Edit photos" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
   <input type="file" onChange={handleFile} multiple={true} key={Date.now()} />
     <h3>Image preview</h3>
 {preview}
       <TextArea showCount maxLength={240}
            value={ leel.body }
            placeholder={leel.body} onChange={onChange} />
      </Modal>
      </>

//    

)};

