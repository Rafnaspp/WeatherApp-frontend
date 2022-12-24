import logo from './logo.svg';
import Home from '../src/components/Home.jsx'
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Grid from './components/ytImages/Grid';
import Nav from './components/navBar/Nav';

// init

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
  <Route path="/" element={<Login />}/>
  <Route path="/signup" element={<Signup/>}/>
  {/* <Route path="/details" element={<Grid/>}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
