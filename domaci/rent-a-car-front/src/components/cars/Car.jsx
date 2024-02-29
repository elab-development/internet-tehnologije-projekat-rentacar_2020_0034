import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Car.css'

const Car = ({ car }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/cars/${car.id}`);
  };

  return (

    <div className="car-container">
      <h2 className="car-title"> {car.name}</h2>
      <p><strong>Price of the car: </strong> {car.price} EUR</p>
      <p><strong>Rent time: </strong> {car.rentTimeInDays} days</p>
      <button onClick={goToDetails} className="details-button">See more <FaArrowRight/></button>
    </div>
  );
};

export default Car;
