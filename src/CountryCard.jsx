import { useState } from 'react';



const CountryCard = ({countryArray}) =>{
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
    <>
      <div className='flex flex-col m-auto w-[70%] justify-center items-center'>
        {country}
      </div>
    </>
  )
};


export default CountryCard;
