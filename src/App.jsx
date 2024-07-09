import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-sky-300 selection:text-sky-800'>
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className='absolute bottom-0 left-0 right-0 top-0 h-screen w-screen bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'>
        <div className='container mx-auto px-8'>
          <Navbar />
        </div>
        </div> 
    </div>
  )
}

export default App;
