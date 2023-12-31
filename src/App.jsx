import { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CountryCard from './CountryCard';
import Navigation from './Navigation';


function App() {
  const [countryArray, setCountryArray] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const ToggleDarkMode = ()=>{
    setDarkMode((prevElement)=>{return !prevElement});
    if(darkMode){
      document.body.classList.remove('dark');
    }else{
      document.body.classList.add('dark');
    }
  }

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
    <main className='mb-20'>
      <Navigation toggleDark={ToggleDarkMode}></Navigation>
      <section className='font-nunito-sans max-w-[1440px] m-auto'>
        <CountryCard countryArray={countryArray}></CountryCard>
      </section>
    </main>
  )
}

export default App
