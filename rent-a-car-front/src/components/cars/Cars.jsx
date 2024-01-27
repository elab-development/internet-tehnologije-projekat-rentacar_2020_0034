import React, { useState } from 'react';
import Car from './Car';
import useCars from '../customhooks/useCars';
import './Cars.css'

const Cars = () => {
  
  const [cars] = useCars('http://127.0.0.1:8000/api/cars');

  const [kriterijumPretrage, setKriterijumPretrage] = useState('');

  const handleSearchChange = (e) => {
    setKriterijumPretrage(e.target.value);
    setTrenutnaStranica(1); 
  };

  const filtriranaKola = cars.filter(car =>
    car.name.toLowerCase().includes(kriterijumPretrage.toLowerCase())
  );

  const [trenutnaStranica, setTrenutnaStranica] = useState(1);
  const kolaPoStranici = 6;  
  const indeksPoslednjeg = trenutnaStranica * kolaPoStranici;
  const indeksPrvog = indeksPoslednjeg - kolaPoStranici;
  const trenutnaKola = filtriranaKola.slice(indeksPrvog, indeksPoslednjeg);

  const paginate = (broj) => setTrenutnaStranica(broj);

  const brojeviStranica = [];
  for (let i = 1; i <= Math.ceil(filtriranaKola.length / kolaPoStranici); i++) {
    brojeviStranica.push(i);
  }

  return (
    <>
     <div className="cars">
      <div className='cars-search'>
      <input 
        type="text" 
        placeholder="Pretrazite kola po nazivu..." 
        value={kriterijumPretrage}
        onChange={handleSearchChange}
        className="search-input"
      />
      </div>
      <div className='cars-section'>
      {trenutnaKola.map(car => (
        <Car key={car.id} car={car} />
      ))}
      </div>
      <div className="pagination">
        {brojeviStranica.map(broj => (
          <button key={broj} onClick={() => paginate(broj)} className="page-broj">
            {broj} 
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default Cars;
