import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import Success from './pages/Success';
function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/api/password-reset/:id/:token" element={<ChangePassword />} />
        <Route path="/success" element={<Success />} />
      </Routes>

    </div>
  );
}

export default App;
