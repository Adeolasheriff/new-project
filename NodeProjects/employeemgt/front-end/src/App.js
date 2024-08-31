import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './component/signup';
import Login from './component/login';
import Home from './component/home';
import Forgetpassword from './component/forgetpassword';
import Resetpassword from './component/resetpassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<Forgetpassword/>}></Route>
          <Route path='/reset-password/:token' element={<Resetpassword/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
