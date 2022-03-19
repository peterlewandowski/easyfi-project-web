import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import { SettingOutlined } from '@ant-design/icons';
import Navbar from "./components/common/Navbar"
import Home from "./scenes/Home";
import Dashboard from "./scenes/Dashboard";
import CreateStrategy from "./components/CreateStrategy";
// import "./App.css"
const { Header, Footer, Content } = Layout;

const styles = {
  header: {
    // position: "fixed",
    // zIndex: 0,
    width: "100%",
    // color: "white",
    padding: "0 12px",
    
  },

  // h1: {
  //   color: 'white',
  //   padding: '0 0px 0px',
  // },

  content: {
    padding: "0 50px",
    marginTop: 64,
  },

  footer: {
    width: "100%",
    color: "#001529",
    padding: "0 12px",
  },
};

//auth for the currentUser
export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    if (jwt !== null) {
      fetch(`${process.env.REACT_APP_API_URL}/getUser`, {
        headers: { Authorization: jwt },
      })
        .then((apiResponse) => {
          if (apiResponse.status === 403 || apiResponse.status === 500) {
            localStorage.removeItem("jwt");
            return;
          }
          return apiResponse.json();
        })
        .then(setUser)
        .catch(alert);
    }
  }, []); // check what should go in here as dependency

// handleClick = e => {
//   console.log('click', e);
//   this.setState({ current: e.key });
// }

  // const { current } = this.state;

  return (
    <UserContext.Provider value={{ user, setUser, jwt, setJwt }}>
      <Layout color="grey">
        <Header style={styles.header}>
          <Navbar />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreateStrategy />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </UserContext.Provider>
  );
}
