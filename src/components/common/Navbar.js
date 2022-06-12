import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import { Button } from "antd";
import LogoImage from "./../../easyfi-logo.png";

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

  const navButtons = (condition) => {
    if (condition) {
      return (
        <span>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          <Button onClick={handleLogout}>Sign Out</Button>
        </span>
      );
    } else {
      return (
        <span>
          <Button type="primary" onClick={handleClickLogin}>
            Sign in!
          </Button>
        </span>
      );
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          style={{
            width: "25%",
          }}
          src={LogoImage}
          onClick={() => navigate("/")}
          alt="easyFi: Investment Planning. Made Easy."
        />
      </div>
      <div>{navButtons(user)}</div>
    </nav>
  );
}
