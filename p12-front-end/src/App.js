import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
