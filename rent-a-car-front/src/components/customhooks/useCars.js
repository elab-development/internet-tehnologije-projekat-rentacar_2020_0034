 import { useState, useEffect } from 'react';
import axios from 'axios';

const useCars = (url) => {
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCars(response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  return [Cars, setCars];
};

export default useCars;
