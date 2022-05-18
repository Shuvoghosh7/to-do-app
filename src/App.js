import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './Component/Notfound/Notfound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
