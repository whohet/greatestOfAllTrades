import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/Auth/SignUp/SignUp';
import LoginUser from './components/Auth/Login/LoginUser';
import Header from "./components/Header/Header";
import Dashboard from './components/adminDashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginUser />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminDashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
