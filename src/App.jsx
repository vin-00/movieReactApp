import React, { useState } from 'react';
import Search from './components/Search';

function App() {

  const [searchTerm , setSearchTerm] = useState("Search");

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper' >
        <header>
          <img src="" alt="Hero Banner" />
          <h1>Find <span className='text-gradient' >Movies</span> You'll Enjoy without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
      </div>
    </main>
  )
}

export default App
