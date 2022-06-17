import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangerate.host/latest?'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

useEffect(() => { 

fetch(BASE_URL)
  .then(res => res.json())
  .then(data =>{
    setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    setFromCurrency(data.base)
    setToCurrency(data.base)
  })
}, [])

  return(
    <>
  <h1>Convert</h1>
  <CurrencyRow
   currencyOptions={currencyOptions}/>
  <div className="Equals">=</div>
  <CurrencyRow
   currencyOptions={currencyOptions}/>
  </>
  );
}

export default App;
