import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { AnonRoute } from "./components/AnonRoute";
import { AuthRoute } from "./components/AuthRoute";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "antd";
import { UserContextProvider } from "./context/UserContext";
import { InputContextProvider } from "./context/InputContext";
import Home from "./scenes/Home";
import Dashboard from "./scenes/Dashboard";
import CreateStrategy from "./components/CreateStrategy";
const { Header, Content } = Layout;

const styles = {
  header: {
    width: "100%",
    padding: "0 12px",
  },

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
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <Router>
      <UserContextProvider>
        <InputContextProvider>
          <Layout color="grey">
            <Header style={styles.header}>
              <Navbar />
            </Header>
            <Content>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<CreateStrategy />} />
                <Route
                  path="/login"
                  element={
                    <AnonRoute>
                      <LoginPage />
                    </AnonRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <AuthRoute>
                      <Dashboard />
                    </AuthRoute>
                  }
                />
              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </Layout>
        </InputContextProvider>
      </UserContextProvider>
    </Router>
  );
}
