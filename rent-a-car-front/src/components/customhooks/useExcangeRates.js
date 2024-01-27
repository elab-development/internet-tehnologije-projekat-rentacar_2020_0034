import { useState } from 'react';
import axios from 'axios';

const useExchangeRates = () => {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [dinars, setDinars] = useState(0);
  const [euros, setEuros] = useState(0);

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/EUR');
      const { rates } = response.data;
      setExchangeRate(rates.RSD);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const convertToDinars = (enteredEuros) => {
    const convertedDinars = enteredEuros * exchangeRate;
    setDinars(convertedDinars);
    setEuros(enteredEuros);
  };

  return { dinars, setDinars, euros, fetchExchangeRate, convertToDinars };
};

export default useExchangeRates;