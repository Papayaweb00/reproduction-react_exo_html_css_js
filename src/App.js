import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AcceuilPage from './acceuilpage/AcceuilPage';
import Footer from './acceuilpage/Footer';
import './index.css';
import NavBar from './navbar_et_footer/NavBar';
import Fruit from './fruits/Fruit';
import Jouet from './jouets/Jouet';
import Vetement from './vetements/Vetement';
import Panier from './panier/Panier';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<AcceuilPage />} ></Route>
          <Route path='/fruit' element={<Fruit />} ></Route>
          <Route path='/jouet' element={<Jouet />}></Route>
          <Route path='/vetement' element={<Vetement />}></Route>
          <Route path='/panier' element={<Panier/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
