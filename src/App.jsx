import { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CountryCard from './CountryCard';


function App() {
  const [countryArray, setCountryArray] = useState([]);

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(function (response) {
      // handle success
      setCountryArray(response.data);
      // console.log(response);
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  },[])

  return (
    <main className=''>
      <section className='bg-LightBackground font-nunito-sans dark:bg-DarkBackground '>
        <CountryCard countryArray={countryArray}></CountryCard>
      </section>
    </main>
  )
}

export default App
