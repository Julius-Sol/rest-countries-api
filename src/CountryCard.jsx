import { useState } from 'react';
import searchIcon from './assets/search-outline.svg';
import chevronIcon from './assets/chevron-down-outline.svg';

 
  const CountryCard = ({countryArray}) =>{
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [hideDrop, setHideDrop] = useState(true);
    const searchFailText = <p className='dark:text-white text-3xl mt-[50%]'>No Search Found</p> ;

    const unhideDrop = () => {
      setHideDrop(()=>false)
    }

  //Function to handle state change of search input
    const handleChange = (event) =>{
      setSearch((prevSearch)=>{
        return event.target.value;
      });
    } 

   //Function to handle click on filter menu
    const handleFilterClick = (event) =>{
      setFilter((prevFilter)=>{
        return event.target.value;
      })
      setHideDrop(()=>true);
    }

    console.log(filter);

   const filteredCountries = filter ?  countryArray.filter((el) => el.region.toLowerCase().includes(filter.toLowerCase())) : countryArray;  

  // Variable to store array of countries. Filters countries array to find search query. If there
  // is no query then it will show all countries avalible
  const countries = search ?  filteredCountries.filter((el) => el.name.common.toLowerCase().includes(search.toLowerCase())) : filteredCountries;  

  // Maps countries array to display
  const country = countries.map((country,index)=>{
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
    <div className='pt-6 dark:bg-DarkBackground h-[100%]'>
      {/* Search input */}
      <label htmlFor="search" className='flex  bg-white px-5 py-4 m-auto w-[90%] shadow-[0_1px_3px_0px_rgba(133,133,133,0.2)] rounded dark:bg-DarkElement dark:text-white'>
          <img src={searchIcon} alt="glass" className='w-4 ml-2 dark:filter dark:invert'/>
          <input type="text" name="search" id="search" placeholder='Search for a country...' 
          className='w-full pl-5 focus:outline-none dark:bg-DarkElement dark:text-white text-sm'
          value={search}
          onChange={handleChange}
          />
        </label>
        {/* DropDown menu */}
        <div className='relative m-auto w-[90%] mt-8'>
          <div className='flex justify-between gap-5 bg-white dark:bg-DarkElement dark:text-white w-48 py-2 px-4 hover:cursor-pointer ' onClick={unhideDrop}>
            <p>Filter by Region</p>
            <img src={chevronIcon} alt="chevron icon" className='w-3' />
          </div>
          <div className={hideDrop ? 'hidden' : 'absolute mt-1 flex flex-col bg-white dark:bg-DarkElement dark:text-white py-2 '}>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='' onClick={handleFilterClick}>All</button>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='africa' onClick={handleFilterClick}>Africa</button>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='america' onClick={handleFilterClick}>America</button>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='asia' onClick={handleFilterClick}>Asia</button>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='europe' onClick={handleFilterClick}>Europe</button>
            <button className='text-left w-48 bg-white dark:bg-DarkElement dark:text-white px-4 py-1 text-sm' value='oceania' onClick={handleFilterClick}>Oceania</button>
          </div>
        </div>
        
        
      <div className='flex flex-col m-auto w-[70%] justify-center items-center'>
        {country <= 0 ? searchFailText : country }
      </div>
    </div>
  )
};


export default CountryCard;
