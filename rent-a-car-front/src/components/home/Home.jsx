import React, { useState } from 'react';
import useExchangeRates from '../customhooks/useExcangeRates';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {
  const { dinars, euros, fetchExchangeRate, convertToDinars } = useExchangeRates();
  const [enteredEuros, setEnteredEuros] = useState('');

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  const handleEuroInputChange = (event) => {
    setEnteredEuros(event.target.value);
  };

  const handleConvertToDinars = () => {
    convertToDinars(Number(enteredEuros));
  };

  return (
    <div className="home-container">
      <div className='home-text'>
      <h1>Dobrodosli na nasu aplikaciju Wheels On Rent</h1>
      <p>
        Placanje rentiranja kola mozete izvrsiti u EUR. Ako vas interesuje konkretna cena u dinarima,
         iskoristite sledeci konvertor EUR - RSD
      </p>
      <div className='pretvaranje-kursa'>
      <div>
        <input
          type="number"
          value={enteredEuros}
          onChange={handleEuroInputChange}
          placeholder="Unesite iznos u evrima"
        />
        <button onClick={handleConvertToDinars}>Pretvori u dinare</button>
      </div>
      {dinars !== 0 && euros !== 0 && (
        <p>
          Uneseni iznos od {euros} EUR iznosi {dinars} RSD.
        </p>
        
      )}
      </div>
      </div>
    </div>
  );
};

export default Home;
