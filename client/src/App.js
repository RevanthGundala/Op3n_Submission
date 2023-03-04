// import logo from './logo.svg';
import './App.css';
import PageDisplay from './pages/PageDisplay';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import ConnectPage from './pages/ConnectPage';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <PageDisplay />
      {/* <Routes>
        <Route path='/' element={<PageDisplay />}/>
        <Route path='/connect' element={<ConnectPage />}/>
      </Routes> */}
    </div>
  );
}

export default App;
