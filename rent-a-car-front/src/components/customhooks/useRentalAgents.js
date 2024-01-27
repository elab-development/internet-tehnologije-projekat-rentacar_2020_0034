import { useState, useEffect } from 'react';
import axios from 'axios';

const useRentalAgents = (url) => {
  const [rentalAgents, setRentalAgents] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRentalAgents(response.data.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  return [rentalAgents, setRentalAgents];
};

export default useRentalAgents;