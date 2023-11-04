import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Header from './components/Header';
import Navside from './components/Navside';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/header' element={<Header/>} />
      <Route path='/navside' element={<Navside/>} />
    </Routes>
  );
}

export default App;
