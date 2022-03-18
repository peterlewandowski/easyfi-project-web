import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UserContext } from "../../App";
// import LogoImage from "./easyfi-logo.png"


export default function Navbar() {
    const navigate = useNavigate()
    
    const {user, setUser} = useContext(UserContext)
    
    const handleClickSignUp = () => {
        navigate('/dashboard')
    }
    const handleClickLogin = () => {
        navigate('/dashboard')
    }
    
    const handleLogout = () => {
        localStorage.removeItem("jwt")
        setUser(null)
    }
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a onClick={handleClickLogin}>My Dashboard</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a onClick={handleLogout}>Logout</a>
          </Menu.Item>
        </Menu>
      );
  return (
    <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* <img className="logo" src={LogoImage} onClick={() => navigate('/')} /> */}
      <h1
        style={{ color: "lime", padding: "0 0px 0px" }}
        onClick={() => navigate("/")}
      >
        easyFi
      </h1>
      {!user ? (
        <span>
          <Button onClick={handleClickSignUp}>Sign Up!!!</Button>
          <Button type="primary" onClick={handleClickLogin}>Log in!!!</Button>
        </span>
      ) : (
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Log in
            <DownOutlined />
          </a>
        </Dropdown>
      )}
    </nav>
  );
}
