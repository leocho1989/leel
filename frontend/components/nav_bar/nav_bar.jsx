import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Menu, Dropdown, Card } from 'antd';
import { DownOutlined,  UserOutlined, HeartOutlined,UnorderedListOutlined, HomeFilled, RocketFilled} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';





export default ({ currentUser, logout, ...props}) =>{

    let location = useLocation();

  const leelsOb = useSelector((state) => state.leels);
  

  const leels = Object.keys(leelsOb).map(key=>leelsOb[key]);


  const leel= (currentUser) ? (leels.filter(leel => leel.author_username===currentUser.username)[0]) : (null);

  const dispatch = useDispatch();

  const usersOb = useSelector((state) => state.users);
    
   const users = Object.keys(usersOb).map(key=>usersOb[key]);

  //  console.log(users);

   const menu = currentUser ? 
    (<>
  <Menu>
    <Menu.Item key="1">
      <a href={`/#/users/${(leel===undefined) ? (null) :(leel.author_id)}`}>
        <UnorderedListOutlined /> My leels
      </a>
    </Menu.Item >
    <Menu.Item key="2">
      <a href={`/#/likes`}>
        <HeartOutlined /> Likes
      </a>
    </Menu.Item >

    <Menu.Item key="4" danger onClick={logout}><RocketFilled /> Log Out</Menu.Item>
  </Menu>
  </>
) : null;

    const display = currentUser ? (
        <div>
             <div>
                 <a className="home_icon" href="/"><HomeFilled /></a>&nbsp;&nbsp;&nbsp;
               <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <UserOutlined />&nbsp;{currentUser.username} <DownOutlined />
    </a>
  </Dropdown>
  </div>
        </div> 
    ):(
        <div>
            {(location.pathname === '/login' || location.pathname === '/' || location.pathname === '/leel_posts') && <Link className="button" id="signup" to="/signup">Sign Up</Link>}
            {(location.pathname === '/signup' || location.pathname === '/' || location.pathname === '/leel_posts') &&<Link className="button" id="login" to="/login">Log in</Link>}
        </div>
    );


  const [searchInfo, setSearchInfo] = useState("");

const handleChange = (e) => {
  e.preventDefault();
  setSearchInfo(e.target.value);
}

const user = (searchInfo !=="" && users.length >0) ? (users.filter(user=> user.username.toLowerCase().includes(searchInfo.toLowerCase()))):(null)


const searchResult = <>
 <Card style={{ width: 500 }}>
   {(user && user.length>0) ? (user.map((userOb,index)=> (<><a href={`/#/users/${userOb.id}`} key={userOb.id}><p key={index}>{userOb.username}</p></a></>))):(<p>No leelers found</p>)}
    </Card>
    </>



    return (
      <>
        <header className="nav-bar">
         <div>
          <Link className="logo "to="/">leel</Link>


          <Dropdown  overlay={searchResult}>
    
            <input className="search_bar" placeholder="Search leelers" onChange={handleChange} style={{ width: 300 }} />
            
  </Dropdown> 

         </div>
            <div>
                {display}  
            </div>
        </header>

        </>
    )
}