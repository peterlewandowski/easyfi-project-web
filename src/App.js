import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import StrategiesList from './components/StrategiesList';
import CreateStrategy from './scenes/CreateStrategy';
import { Layout } from 'antd'

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
      <Layout color='grey' >
        <Header style={styles.header} >
        <h1 style={{ color: 'lime', padding: '0 0px 0px'}}>easyFi</h1>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<StrategiesList />} />
            <Route path='/createStrategy' element={<CreateStrategy />} />
          </Routes>
        </Content>
        <Footer>&copy; 2022, Peter L.</Footer>
      </Layout>
    </>
  );
}