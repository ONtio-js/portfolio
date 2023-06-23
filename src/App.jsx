import { useState } from 'react';
import './App.css';
import RoundOne from './components/RoundDesigns/Round1';
import RoundTwo from './components/RoundDesigns/Round2';
import RoundThree from './components/RoundDesigns/Round3';
import RoundFour from './components/RoundDesigns/Round4';
import Home from './components/Home/Home';

function App() {


  return (
    <>
      <div className='overflow-hidden w-full lgl:h-screen font-bodyFont text-textColor bg-black relative'>
        <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
          < Home />
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-10'>
         < RoundOne />
         < RoundTwo />
         < RoundThree />
         < RoundFour />
        </div>
      </div>
    </>
  )
}

export default App;
