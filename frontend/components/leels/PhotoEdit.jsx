import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Input } from 'antd';
import { updateLeelPhoto} from '../../actions/leels';
import { EditOutlined, MinusCircleFilled } from '@ant-design/icons';



export default ({leel})=> {
  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body,setBody] = useState("");
  const [photoFiles, setPhotoFiles] = useState(null);
  const [photoAdds,setPhotoAdds] = useState(leel.photoUrls);
  const [photos, setPhotos] = useState(null);
  
  const [photoUrls, setPhotoUrls] = useState(leel.photoUrls);


  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.currentUser);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);

    const formData = new FormData();
 

  formData.append('body', leel.body);
  formData.append('author_id', currentUser.id);
  formData.append('id',leel.id);
  
  for (let i = 0; i <photoUrls.length; i++) {
      formData.append('photoUrls[]', photoUrls[i]);
    }

 if (photos) {

    for (let i = 0; i <photos.length; i++) {
      formData.append('photos[]', photos[i]);
    }
  }

   dispatch(updateLeelPhoto(formData)).then(setPhotoUrls(leel.photoUrls));

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

      const handleDelete = index =>{
        leel.photoUrls.splice(index,1);
        setPhotoUrls(leel.photoUrls);
        setBody(leel.body);
      //  console.log(photoUrls);
  
        
      };

      


    const preview = (leel.photoUrls.length > 0)? 
      (leel.photoUrls.map((photoUrl,index)=>(<div key={index}>
      <p ><img id="preview_pic" src={photoUrl} /> <button className="delete_photo" key={photoUrl} onClick={()=>handleDelete(index)}><MinusCircleFilled /></button></p>
      </div> ))) : null;


return (

    <>
  <button className="editbtntext" onClick={showModal} ><EditOutlined /></button>
<Modal title="Edit photos" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
   <input type="file" onChange={handleFile} multiple={true} key={Date.now()} />
     <h3>Image preview</h3>
 {preview}
       <TextArea showCount maxLength={150}
            value={ leel.body }
            placeholder={leel.body}
            autoSize={{ minRows: 3, maxRows: 4 }}
            onChange={onChange} />
      </Modal>
      </>

//    

)};

