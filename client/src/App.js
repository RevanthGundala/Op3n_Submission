// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectPage from './pages/ConnectPage';
import InboxPage from './pages/InboxPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <section>
          <Routes>
            <Route path='/' element={<InboxPage />} />
            <Route path='/' element={<ConnectPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
