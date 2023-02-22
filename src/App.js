import React, { useState } from 'react';
import './App.css';
import { GlobalContext } from "./context/GlobalContext";
import { Analisis } from './components/analisis/Analisis';

function App() {
  //GraficoCerealEntregado
  const [infoTotal, setInfoTotal]=useState({});
  const [infoSoja, setInfoSoja]=useState({});
  const [infoTrigo, setInfoTrigo]=useState({});
  const [infoMaiz, setInfoMaiz]=useState({});
  const [infoOtrosGranos, setInfoOtrosGranos]=useState({});

  //AnalisisInsumosComprados
  const [infoInsumoTotal, setInfoInsumoTotal]=useState({});
  const [infoInsumoAgroquimicos, setInfoInsumoAgroquimicos]=useState({});
  const [infoInsumoSemillas, setInfoInsumoSemillas]=useState({});
  const [infoInsumoFertilizantes, setInfoInsumoFertilizantes]=useState({});

  const idC = localStorage.getItem("cliente"); //Probando
  const [idCliente, setIdCliente]=useState(idC); //Probando


  return (
    <GlobalContext.Provider value={{
      idCliente, setIdCliente, //Probando

      //GraficoCerealEntregado
      infoTotal, setInfoTotal,
      infoSoja, setInfoSoja,
      infoTrigo, setInfoTrigo,
      infoMaiz, setInfoMaiz,
      infoOtrosGranos, setInfoOtrosGranos,

      //AnalisisInsumosComprados
      infoInsumoTotal, setInfoInsumoTotal,
      infoInsumoAgroquimicos, setInfoInsumoAgroquimicos,
      infoInsumoSemillas, setInfoInsumoSemillas,
      infoInsumoFertilizantes, setInfoInsumoFertilizantes,
    }}>
      <Analisis />

    </GlobalContext.Provider>
  );
}

export default App;
