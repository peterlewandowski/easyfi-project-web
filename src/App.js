import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Home from './scenes/Home';
import Dashboard from './scenes/Dashboard'
import CreateStrategy from './components/CreateStrategy';
const { Header, Footer, Content } = Layout

const styles = {
  header: {
    // position: "fixed",
    // zIndex: 0,
    width: "100%",
    // color: "white",
    padding: "0 12px"
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
    padding: "0 12px"
  }
};

export default function App() {
  return (
    <>
      <Layout color="grey">
        <Header style={styles.header}>
          <h1 style={{ color: "lime", padding: "0 0px 0px" }}>easyFi</h1>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreateStrategy />} />
          </Routes>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}