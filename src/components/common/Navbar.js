import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import LogoImage from "./easyfi-logo.png"

export default function Navbar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleClickLogin = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* <img className="logo" src={LogoImage} onClick={() => navigate('/')} /> */}
      <h1
        style={{ color: "lime", padding: "0 0px 0px" }}
        onClick={() => navigate("/")}
      >
        easyFi
      </h1>
      {!user ? (
        <span>
          <Button type="primary" onClick={handleClickLogin}>
            Sign in!
          </Button>
        </span>
      ) : (
        <Button onClick={handleLogout}>Sign Out</Button>
      )}
    </nav>
  );
}
