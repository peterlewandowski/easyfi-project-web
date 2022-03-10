import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import StrategiesList from './components/StrategiesList';
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

export default function App() {
  return (
    <>
      <Layout color='grey' >
        <Header>
          <Main />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<StrategiesList />} />
          </Routes>
        </Content>
        <Footer>&copy; 2022, Peter L.</Footer>
      </Layout>
    </>
  );
}