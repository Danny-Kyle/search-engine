import React from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routing } from './components/Routing';
import Search from './components/Search';
import { useAppContext } from './context';

const App = () => {
  const {darkTheme, setDarkTheme} = useAppContext();

  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Search />
          <Routing />
          <Footer />
        </div>
    </div>
  )
}

export default App