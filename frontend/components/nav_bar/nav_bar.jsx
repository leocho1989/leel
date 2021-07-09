import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, GithubOutlined, UserOutlined, HeartOutlined,UnorderedListOutlined, UserAddOutlined } from '@ant-design/icons';

export default ({currentUser, logout, ...props}) =>{

    let location = useLocation();

   const menu = currentUser ? 
    (<>
  <Menu>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href={`/#/users/${currentUser.id}`}>
        <UnorderedListOutlined /> My leels
      </a>
    </Menu.Item >
    <Menu.Item key="2" disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <HeartOutlined /> Likes (disabled)
      </a>
    </Menu.Item >
    
    <Menu.Item key="3" disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        <UserAddOutlined /> Following (disabled)
      </a>
    </Menu.Item >
    <Menu.Item key="4" danger onClick={logout}>Log Out</Menu.Item>
  </Menu>
  </>
) : null;

    const display = currentUser ? (
        <div>
             <div>
                 <GithubOutlined />&nbsp;&nbsp;&nbsp;
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
 

    return (
        <header className="nav-bar">
            <Link className="logo" to="/">leel</Link>
            <div>
                {display}
                 
            </div>

        </header>
    )
}