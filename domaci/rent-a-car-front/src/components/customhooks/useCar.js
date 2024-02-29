import { useState, useEffect } from 'react';
import axios from 'axios';

const useCar = (carId) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/cars/${carId}`)
      .then(response => {
        setCar(response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [carId]);

  return car;
};

export default useCar;