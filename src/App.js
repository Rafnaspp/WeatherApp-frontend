import logo from './logo.svg';
import Home from '../src/components/Home.jsx'
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Grid from './components/ytImages/Grid';
import Nav from './components/navBar/Nav';
import { useSelector } from 'react-redux';

// init

function App() {

  const user = useSelector((state)=>state.authData)
  // const user = localStorage.getItem("profile")
  console.log(user);




  console.log(user);

  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
  <Route path="/" element={user ? <Navigate to ="home"/> :<Navigate to ="login"/> }/>
  <Route path="/login" element={user? <Navigate to ="/home"/> :<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/home" element={user? <Home />:<Navigate to ="/login"/> }/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
