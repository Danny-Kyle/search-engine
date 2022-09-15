import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ( {darkTheme, setDarkTheme} ) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to="/">
            <p className='text-2xl py-1 rounded dark:bg-gray-500 dark:text-teal-600 px-2 font-bold text-red-400 bg-slate-900'>
              Hebron🕸
            </p>
          </Link>
          <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-3 py-1 hover:shadow-lg '>
            {darkTheme ?  'Dark🌚' : 'Light🌝'}
          </button>
        </div>
    </div>
  )
}
