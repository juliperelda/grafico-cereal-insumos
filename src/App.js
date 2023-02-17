import './App.css'
import React, { useState } from 'react'
import { GlobalContext } from "./context/GlobalContext";
import { Analisis } from './components/analisis/Analisis';

function App() {
  const [infoTotal, setInfoTotal]=useState({});
  const [infoSoja, setInfoSoja]=useState({});
  const [infoTrigo, setInfoTrigo]=useState({});
  const [infoMaiz, setInfoMaiz]=useState({});
  const [infoOtrosGranos, setInfoOtrosGranos]=useState({});

  const idC = localStorage.getItem("cliente"); //Probando
  const [idCliente, setIdCliente]=useState(idC); //Probando


  return (
    <GlobalContext.Provider value={{
      infoTotal, setInfoTotal,
      idCliente, setIdCliente, //Probando
      infoSoja, setInfoSoja,
      infoTrigo, setInfoTrigo,
      infoMaiz, setInfoMaiz,
      infoOtrosGranos, setInfoOtrosGranos,
    }}>
      {/* <p>HOLA BRODERRRRR</p> */}
      <Analisis />

    </GlobalContext.Provider>
  );
}

export default App;
