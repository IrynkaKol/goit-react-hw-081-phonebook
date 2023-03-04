import { Navigation } from 'components/Navigation/Navigation';
import Contacts from 'components/pages/Contacts';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import Register from 'components/pages/Register';
import { Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <div>
      <Navigation/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};
