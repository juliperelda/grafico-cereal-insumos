import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useContext, useEffect, useState } from 'react'
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ComposedChart, Line, Bar, LabelList } from 'recharts';
import { GlobalContext } from '../../context/GlobalContext';
import './graficoCerealEntregado.css'


// [SCORING]
const TIPO = "nosis";

// [ANALISIS_CEREAL]
const TRIGO = 1;
const MAIZ = 2;
const SOJA = 5;

const items = [
    {
        key: '1',
        label: `TOTAL`,
        children: `Total 1`,
    },
    {
        key: '2',
        label: `SOJA`,
        children: `Soja 2`,
    },
    {
        key: '3',
        label: `TRIGO`,
        children: `Trigo 3`,
    },
    {
        key: '4',
        label: `MAIZ`,
        children: `Maiz 4`,
    },
    {
        key: '5',
        label: `OTROS GRANOS`,
        children: `Otros granos 5`,
    },

];

export const GraficoCerealEntregado = () => {

    const {
        infoTotal, 
        setInfoTotal,
        idCliente, //Probando
        setIdCliente,
        infoSoja, 
        setInfoSoja,
        infoTrigo, 
        setInfoTrigo,
        infoMaiz, 
        setInfoMaiz,
        infoOtrosGranos, 
        setInfoOtrosGranos,
    } = useContext(GlobalContext);

    const [activeKey, setActiveKey] = useState(items[0].key);

    /*------------------Inicio DataTotal----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoDataTotal(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../com_graEvolucionData.php", {
        fetch("../gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                
                // console.log("resp: ", resp);
                // const data = resp;
                const data = resp.substring(resp.indexOf('['));
                // console.log("data: ", data);

                // console.log("JSON.text(data): ", JSON.text(data));
                // console.log("JSON.parse(data): ", JSON.parse(data));
                var objetoData = JSON.parse(data);
                setInfoTotal(objetoData);
                // console.log("objetoData: ", objetoData)
                // console.log("data: ", data)
                // console.log("infoTotal: ", infoTotal)
                // console.log("isDataTotal4: ", isDataTotal)
            });
        });
        // console.log("infoTotal: ", infoTotal)
    }

    useEffect(() => {
        // console.log("idCliente: ", idCliente)
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataTotal(idCliente);
        // console.log("infoTotal2: ", infoTotal);
        // console.log("isDataTotal3: ", isDataTotal)
    }, [idCliente]);

    useEffect(() => {
        // console.log("infoTotal actualizado: ", infoTotal);
        // console.log("isDataTotal2: ",isDataTotal)
      }, [infoTotal]);


    // infoEvo.kil = TT Entregadas
    // infoEvo.tt_est = TT Encuesta
    const [isDataTotal, setIsDataTotal] = useState([]);
    useEffect(() => {
        if (infoTotal.length > 0) {
            setIsDataTotal(
                infoTotal.map((item) => {
              return {
                cosecha: item.acos_desc,
                Entregadas: item.kil,
                Encuesta: item.tt_est,
              };
            })
          );
        }
        console.log("isDataTotal: ", isDataTotal)
      }, [infoTotal]);
      /*------------------Fin DataTotal----------------------*/





    /*------------------Inicio DataSoja----------------------*/
      function InfoDataSoja(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../com_graEvolucionData.php", {
        fetch("../gra_analisisSoja.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                
                console.log("resp: ", resp);
                // const data = resp;
                const data = resp.substring(resp.indexOf('['));
                console.log("data: ", data);

                // console.log("JSON.text(data): ", JSON.text(data));
                console.log("JSON.parse(data): ", JSON.parse(data));
                var objetoData = JSON.parse(data);
                setInfoSoja(objetoData);
                console.log("objetoData: ", objetoData)
                // console.log("data: ", data)
                // console.log("infoSoja: ", infoSoja)
                console.log("isDataSoja4: ", isDataSoja)
            });
        });
        // console.log("infoTotal: ", infoTotal)
    }

    useEffect(() => {
        console.log("idCliente: ", idCliente)
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataSoja(idCliente);
        console.log("infoSoja2: ", infoSoja);
        console.log("isDataSoja3: ", isDataSoja)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoSoja actualizado: ", infoSoja);
        console.log("isDataSoja2: ",isDataSoja)
      }, [infoTotal]);

      const [isDataSoja, setIsDataSoja] = useState([]);
      useEffect(() => {
          if (infoTotal.length > 0) {
            setIsDataSoja(
                infoSoja.map((item) => {
                return {
                  cosecha: item.acos_desc,
                  Entregadas: item.kil,
                  Encuesta: item.tt_est,
                };
              })
            );
          }
          console.log("isDataSoja: ", isDataSoja)
        }, [infoSoja]);
      /*------------------Fin DataSoja----------------------*/


    let data;
    switch (activeKey) {
        case '1':
            data = isDataTotal;
            break;
        case '2':
            data = isDataSoja;
            break;
        case '3':
            // data = dataTrigo;
            break;
        case '4':
            // data = dataMaiz;
            break;
        case '5':
            // data = dataOtrosGranos;
            break;
        default:
            data = isDataTotal;
            break;
    }




    const handleOnChange = (key) => {
        console.log(infoTotal);
        setActiveKey(key);
        // console.log("isDataTotal: ", isDataTotal)
    };




    return (
        <>
            <div className='divContainerPestañas'>
                <Tabs
                    className='tabs-custom'
                    activeKey={activeKey}
                    onChange={setActiveKey}
                >
                    {items.map((item) => (
                        <TabPane key={item.key} tab={item.label}>
                            {/* {item.children} */}
                        </TabPane>
                    ))}
                </Tabs>


                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={150}
                        data={isDataTotal}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} horizontal={true} />
                        <XAxis tick={() => null} />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Legend />

                        {/* Se agregaron los data para probar */}
                        <Bar dataKey='Entregadas' barSize={50} fill="#8fd14a" legendType='circle'>
                            <LabelList dataKey="cosecha" position="bottom"/>
                        </Bar> 
                        <Line type="monotone" dataKey='Encuesta' stroke="#00b33b" strokeWidth={2}/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}



