import { useState } from 'react';
import searchIcon from './assets/search-outline.svg'

 
  const CountryCard = ({countryArray}) =>{

    const [search, setSearch] = useState('');

    const handleChange = (event) =>{
      setSearch((prevSearch)=>{
        return event.target.value;
      });
    } 

  console.log(search)
  const country = countryArray.map((country,index)=>{
    return(
      <div key={index} className='mt-10'>
        <img src={country.flags.png} alt={country.flags.alt} className='w-full'/>
        <div className='bg-white px-5 pb-10 pt-5 shadow-[0_1px_3px_0px_rgba(133,133,133,0.2)] dark:bg-DarkElement dark:text-white'>
          <h1 className='font-bold mb-3'>{country.name.common}</h1>
          <p className='text-[.8rem]'><span className='font-semibold '>Population:</span> {country.population.toLocaleString("en-US")}</p>
          <p className='text-[.8rem]'><span className='font-semibold'>Region:</span> {country.region}</p>
          <p className='text-[.8rem]'><span className='font-semibold'>Captial:</span> {country.capital}</p>
        </div>
      </div>
    )
    
  })
 
  return(
    <div className='pt-6'>
      <label htmlFor="search" className='flex  bg-white px-5 py-2 m-auto w-[90%] shadow-[0_1px_3px_0px_rgba(133,133,133,0.2)] rounded dark:bg-DarkElement dark:text-white'>
          <img src={searchIcon} alt="glass" className='w-4 ml-2 dark:filter dark:invert'/>
          <input type="text" name="search" id="search" placeholder='Search for a country...' 
          className='w-full pl-5 focus:outline-none dark:bg-DarkElement dark:text-white'
          value={search}
          onChange={handleChange}
          />
        </label>
      <div className='flex flex-col m-auto w-[70%] justify-center items-center'>
        {country}
      </div>
    </div>
  )
};


export default CountryCard;
