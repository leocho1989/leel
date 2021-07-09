import React from 'react';
import Text from './Text';
import Photo from './Photo';
import Quote from './Quote';
import Link from './Link';
import Chat from './Chat';
import Audio from './Audio';
import Video from './Video';

export default ()=> {


return (
<>
<div className="postbuttons">

  <Text />

  <div className="vl"></div>
  
  <Photo />

  <div className="vl"></div>
  
  <Quote />

  <div className="vl"></div>
  
  <Link />
  
  {/* <Chat />
  
  <Audio />
  
  <Video /> */}
  

</div>

</>
)


};