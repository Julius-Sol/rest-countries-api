import React from 'react'
import moon from './assets/moon-outline.svg'

function Navigation({toggleDark}) {

  return (
    <nav className=' bg-white py-6 dark:bg-DarkElement max-w-[1440px] m-auto shadow-[0_2px_4px_1px_rgba(133,133,133,0.2)]'>
      <div className='flex flex-row justify-between m-auto w-[90%] items-center dark:text-white'>
        <h1 className='font-semibold'>Where in the World?</h1>
        <div className='flex flex-row gap-3 items-center justify-center text-xs font-semibold hover:cursor-pointer' onClick={()=>{toggleDark()}}>
          <img src={moon} alt="moon" className='w-[16px] filter dark:invert'/>
          <p className=''>Dark Mode</p>
        </div>
      </div>  
    </nav>
  )
}

export default Navigation;