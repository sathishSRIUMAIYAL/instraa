import './App.css';
import SignUp from './component/signup/SignUp';
import Login from './component/login/Login';
import Home from './component/home/Home'
import {Routes,Route} from 'react-router-dom'
import Reels from './component/side/function/iconreel/Reels'
import Expolore from './component/side/function/expolore/Expolore';




function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} Active/>
      <Route path='/sign' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/reel' element={<Reels/>}/>
      <Route path='/expolore' element={<Expolore/>}/>
    </Routes>
  );
}

export default App;


