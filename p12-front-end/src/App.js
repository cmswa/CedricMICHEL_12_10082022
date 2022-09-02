import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profil from './pages/Profil';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Profil />} /> */}
        <Route path='/user/:id' element={<Profil />} />   
        <Route path='/' element={<Navigate to="/user/12" />} />   {/* page accueil par défault d'un utilisateur */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
