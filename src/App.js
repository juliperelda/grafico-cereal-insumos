import './App.css'
import React, { useState } from 'react'
import { GlobalContext } from "./context/GlobalContext";
import { Analisis } from './components/Analisis/Analisis';

function App() {
  const [infoEvo, setInfoEvo]=useState({});


  return (
    <GlobalContext.Provider value={{
      infoEvo, setInfoEvo,
    }}>

      <Analisis />

    </GlobalContext.Provider>
  );
}

export default App;
