import React from 'react';
import useRentalAgents from '../customhooks/useRentalAgents';
import './RentalAgents.css';

const RentalAgents = () => {
  const [rentalAgents] = useRentalAgents('http://127.0.0.1:8000/api/rentalagents');

  return (
    <div className="RentalAgents-container">
      <h1>Agenti koji su zaduženi da vam pomognu u izboru auta za rentiranje:</h1>
      <ul className="RentalAgents-list">
        {rentalAgents.map(rentalAgent => (
          <li key={rentalAgent.id} className="rentalagent-item">
            <h2> {rentalAgent.name}</h2>
            <p>Grad: {rentalAgent.city}</p>
            <p>Email: {rentalAgent.email}</p>
            <p>Telefon: {rentalAgent.telephone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalAgents;