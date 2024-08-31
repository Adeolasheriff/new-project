import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './pages/profile';
import Dashboard from './sidebar/dashboard';
import Faq from './sidebar/faq';
import Contact from './pages/contact';
import Register from './pages/register';
import Login from './pages/login';
import Notfound from './pages/notfound';
import Blank from './pages/blank';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='faq' element={<Faq/>} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='contact' element={<Contact/>} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
          <Route path='*' element={<Notfound/>} />
          <Route path='blank' element={<Blank/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
