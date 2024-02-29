import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cars from './components/cars/Cars';
import CarDetails from './components/cars/CarDetails';
import Home from './components/home/Home';
import RentalAgents from './components/rentalagents/RentalAgents';

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
        <Route 
          path="/agents" 
          element={<RentalAgents/>} 
        />

      </Routes>
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
