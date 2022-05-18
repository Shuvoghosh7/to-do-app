import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './Component/Notfound/Notfound';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
        
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
