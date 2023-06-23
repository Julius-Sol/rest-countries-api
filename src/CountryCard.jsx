import { useState } from 'react';
import searchIcon from './assets/search-outline.svg';
import chevronIcon from './assets/chevron-down-outline.svg';
import backArrow from './assets/arrow-back-outline.svg';
 
  const CountryCard = ({countryArray}) =>{
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [hideDrop, setHideDrop] = useState(true);
    const [hideAll, setHideAll] = useState(false);
    const [indvidualCountryTitle, setIndvidualCountryTitle] = useState('');
    const searchFailText = <p className='dark:text-white text-3xl mt-5'>No Search Found</p> ;
    let country = [] ;

    //Function to change hideAll state to True.
      const UnHideAll = () =>{
        setHideAll(()=>true);
      } 

    //Function to change hideAll state to false.  
      const HideAll = () =>{
        setHideAll(()=>false);
      } 
  
    //Function to handle when country card is clicked.
    const CountryClick = (event)=> {
      let countryTitle = event.currentTarget.children[1].children[0].textContent.toLowerCase();
      setIndvidualCountryTitle(()=>countryTitle)
      UnHideAll();
    }

    //Function to map indivual country information
    const CountryInfoPageFactory = (countryInfo) =>{
      return(
        countryInfo.map((country,index)=>{
          console.log(country);
          return(
            <div key={index} className='w-full mt-16'>
              <img src={country.flags.png} alt={country.flags.alt} className='w-full md:h-[150px] md:w-[300px]'/>
              <div>
                <div className='flex flex-col dark:text-white mt-5 gap-2'>
                  <h1 className='font-bold mb-3 text-lg'>{country.name.common}</h1>
                  <div className='flex flex-col gap-3'>
                    <p className='text-[.9rem]'><span className='font-semibold'>Native Name:</span>test</p>
                    <p className='text-[.9rem]'><span className='font-semibold '>Population:</span> {country.population.toLocaleString("en-US")}</p>
                    <p className='text-[.9rem]'><span className='font-semibold'>Region:</span> {country.region}</p>
                    <p className='text-[.9rem]'><span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
                    <p className='text-[.9rem]'><span className='font-semibold'>Captial:</span> {country.capital}</p>
                  </div>
                </div>
                <div className='flex flex-col dark:text-white mt-5 gap-2'>
                  <p className='text-[.9rem]'><span className='font-semibold'>Top Level Domain:</span> {country.tld[0]}</p>
                  <p className='text-[.9rem]'><span className='font-semibold'>Currencies:</span> {'test'}</p>
                </div>
              </div>
            </div>
          )
        })
      )
    }


    // Function to unhide the filter dropmenue
    const unhideDrop = () => {
      setHideDrop(()=>false)
    }

      // Maps countries array to display
   const CardFactory = (array) => { return (array.map((country,index)=>{
    return(
      <div key={index} className='mt-5 mb-5 md:max-w-[250px] md:max-h-[250px]' onClick={CountryClick}>
        <img src={country.flags.png} alt={country.flags.alt} className='w-full md:h-[150px] md:w-[300px]'/>
        <div className='bg-white px-5 pb-10 pt-5 shadow-[0_1px_3px_0px_rgba(133,133,133,0.2)] dark:bg-DarkElement dark:text-white max-h-[150px]'>
          <h1 className='font-bold mb-3'>{country.name.common}</h1>
          <p className='text-[.8rem]'><span className='font-semibold '>Population:</span> {country.population.toLocaleString("en-US")}</p>
          <p className='text-[.8rem]'><span className='font-semibold'>Region:</span> {country.region}</p>
          <p className='text-[.8rem]'><span className='font-semibold'>Captial:</span> {country.capital}</p>
        </div>
      </div>
    )
  }))}

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

    

   const filteredCountries = filter ?  countryArray.filter((el) => el.region.toLowerCase().includes(filter.toLowerCase())) : countryArray;  

  // Variable to store array of countries. Filters countries array to find search query. If there
  // is no query then it will show all countries avalible
  const countries = search ?  filteredCountries.filter((el) => el.name.common.toLowerCase().includes(search.toLowerCase())) : filteredCountries;  
  country = CardFactory(countries);

  let indiviualCountryArray = [];
  indiviualCountryArray = filteredCountries.filter((el) => el.name.common.toLowerCase()=== indvidualCountryTitle.toLowerCase());
  indiviualCountryArray = CountryInfoPageFactory(indiviualCountryArray);
  return(
    <div className='pt-6'>
      {hideAll ? 
      <div className='m-auto w-[90%] mt-4'>
        <div className='flex gap-2 bg-white dark:bg-DarkElement px-4 py-2 w-24 text-sm shadow-[0_2px_4px_1px_rgba(133,133,133,0.2)] hover:cursor-pointer' onClick={HideAll}>
          <img src={backArrow} alt="back-arrow" className='w-5 dark:invert' />
          <p className='dark:text-white' >Back</p>
        </div>
      </div> 

      :  
      
      <div className='flex flex-col md:flex-row md:justify-between items-center m-auto w-[90%] px-4'>
        {/* Search input */}
        <label htmlFor="search" className='flex bg-white px-5 py-4 m-auto w-[90%] shadow-[0_1px_3px_0px_rgba(133,133,133,0.2)] rounded dark:bg-DarkElement dark:text-white md:w-[30rem] md:h-[100%] md:m-0 md:p-2 md:py-4'>
            <img src={searchIcon} alt="glass" className='w-4 ml-2 dark:filter dark:invert'/>
            <input type="text" name="search" id="search" placeholder='Search for a country...'
            className='w-full pl-5 focus:outline-none dark:bg-DarkElement dark:text-white text-sm'
            value={search}
            onChange={handleChange}
            />
          </label>
          {/* DropDown menu */}
          <div className='relative m-auto w-[90%] mt-8 mb-5 md:w-auto md:m-0 md:py-8'>
            <div className='flex justify-between gap-5 bg-white dark:bg-DarkElement dark:text-white w-48 py-2 px-4 hover:cursor-pointer md:py-4 md:px-6' onClick={unhideDrop}>
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
      </div>}
        
      {hideAll ? 
       <div className='flex flex-col m-auto w-[85%] justify-center items-center md:flex-row md:flex-wrap md:gap-16 md:w-[100%]' >
       {indiviualCountryArray}
     </div>
      : 
      <div className='flex flex-col m-auto w-[70%] justify-center items-center md:flex-row md:flex-wrap md:gap-16 md:w-[100%]' >
        {country <= 0 ? searchFailText : country }
      </div>
      
      }
      
    </div>
  )
};


export default CountryCard;
