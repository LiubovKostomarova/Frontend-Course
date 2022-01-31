import './App.css';
import 'antd/dist/antd.css';
import {  Layout  } from 'antd';
import Table from './components/Table';
import CardList from './components/CardList';
import CardCoup from './components/CardCoup';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
            <Layout>
      <Header><h1>Learn words</h1></Header>
      <Content><CardList /><Table />
      <CardCoup />
        </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
