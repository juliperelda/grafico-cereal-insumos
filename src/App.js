import './App.css'
import React, { useState } from 'react'
import { GlobalContext } from "./context/GlobalContext";
import { Analisis } from './components/Analisis/Analisis';

function App() {
  return (
    <GlobalContext.Provider value={{}}>

      <Analisis />

    </GlobalContext.Provider>
  );
}

export default App;
