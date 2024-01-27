import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cars from './components/cars/Cars';
import CarDetails from './components/cars/CarDetails';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route 
          path="/cars/:id" 
          element={<CarDetails/>} 
        />
        <Route 
          path="/cars" 
          element={<Cars/>} 
        />

      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
