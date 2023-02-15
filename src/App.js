import './App.css'
import React, { useState } from 'react'
import { GlobalContext } from "./context/GlobalContext";
import { Analisis } from './components/Analisis/Analisis';

function App() {
  const [infoEvo, setInfoEvo]=useState({});

  const idC = localStorage.getItem("cliente"); //Probando
  const [idCliente, setIdCliente]=useState(idC); //Probando


  return (
    <GlobalContext.Provider value={{
      infoEvo, setInfoEvo,
      idCliente, setIdCliente, //Probando
    }}>

      <Analisis />

    </GlobalContext.Provider>
  );
}

export default App;
