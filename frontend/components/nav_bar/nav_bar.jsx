import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Input, Space, Menu, Dropdown } from 'antd';
import { DownOutlined,  UserOutlined, HeartOutlined,UnorderedListOutlined, UserAddOutlined, HomeFilled} from '@ant-design/icons';





export default ({ currentUser, logout, ...props}) =>{

    let location = useLocation();
  

   const menu = currentUser ? 
    (<>
  <Menu>
    <Menu.Item key="1">
      <a href={`/#/users/${currentUser.id}`}>
        <UnorderedListOutlined /> My leels
      </a>
    </Menu.Item >
    <Menu.Item key="2">
      <a href={`/#/likes`}>
        <HeartOutlined /> Likes
      </a>
    </Menu.Item >
{/*     
    <Menu.Item key="3" disabled>
      <a href="/">
        <UserAddOutlined /> Following (disabled)
      </a>
    </Menu.Item > */}
    <Menu.Item key="4" danger onClick={logout}>Log Out</Menu.Item>
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

    const { Search } = Input;
    const onSearch = value => console.log(value);
 

    return (
      <>
        <header className="nav-bar">
          <div className="navbar">
          <Link className="logo" to="/">leel</Link>
          <Space direction="vertical">
            <Search className="search_bar" placeholder="Search leel" onSearch={onSearch} style={{ width: 300 }} />
            </Space>
          </div>
            <div>
                {display}  
            </div>
        </header>

        </>
    )
}