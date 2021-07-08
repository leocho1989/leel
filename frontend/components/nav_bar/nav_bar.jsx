import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default ({currentUser, logout, ...props}) =>{

    let location = useLocation();

    const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

    const display = currentUser ? (
        <div>
             <div>
               <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {currentUser.username} <DownOutlined />
    </a>
  </Dropdown>
  </div>
{/*    
            <div className="username">{currentUser.username}</div>
            <button className="button" id="logout" onClick={logout}>Log out</button> */}
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