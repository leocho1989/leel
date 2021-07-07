import React from 'react';

export default ()=> {


return (
<>
<div className="postbuttons">
<div className="postbtn"><img src={window.letteringURL} /><p>Text</p></div>
<div className="postbtn"><img src={window.cameraURL} /><p>Photo</p></div>

<div className="postbtn"><img src={window.quotationURL} /><p>Quote</p></div>

<div className="postbtn"><img src={window.httpURL}Link /><p>Link</p></div>

<div className="postbtn"><img src={window.chatURL} /><p>chat</p></div>

<div className="postbtn"><img src={window.headphonesURL} /><p>Audio</p></div>

<div className="postbtn"><img src={window.videoURL} /><p>Video</p></div>

</div>

</>
)


};