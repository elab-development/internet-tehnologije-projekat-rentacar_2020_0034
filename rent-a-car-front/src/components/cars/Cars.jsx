import React, { useState } from 'react';
import Car from './Car';
import useCars from '../customhooks/useCars';

const Cars = () => {
  
  const [cars] = useCars('http://127.0.0.1:8000/api/cars');

  return (
    <>
    <div className="cars">
      
      <div className='cars-section'>
      {cars.map(car => (
        <Car key={car.id} car={car} />
      ))}
      </div>
      
    </div>
    </>
  );
};

export default Cars;
