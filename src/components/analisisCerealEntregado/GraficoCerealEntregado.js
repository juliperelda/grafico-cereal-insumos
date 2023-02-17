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
        infoEvo,
        setInfoEvo,
        idCliente, //Probando
        setIdCliente,
    } = useContext(GlobalContext);

    const [activeKey, setActiveKey] = useState(items[0].key);

    //*Llama y trae los datos de la consulta php

    function InfoGrafEvol(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../com_graEvolucionData.php", {
        fetch("../gra_analisis.php", {
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
                setInfoEvo(objetoData);
                console.log("objetoData: ", objetoData)
                // console.log("data: ", data)
                // console.log("infoEvo: ", infoEvo)
                console.log("isDataTotal4: ", isDataTotal)
            });
        });
        // console.log("infoEvo: ", infoEvo)
    }

    useEffect(() => {
        console.log("idCliente: ", idCliente)
        // Llama a la función InfoGrafEvol cuando el componente se monta y cuando el ID del cliente cambia.
        InfoGrafEvol(idCliente);
        console.log("infoEvo2: ", infoEvo);
        console.log("isDataTotal3: ", isDataTotal)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoEvo actualizado: ", infoEvo);
        console.log("isDataTotal2: ",isDataTotal)
      }, [infoEvo]);
      



    const dataSoja = [
        {
            name: 'Page A',
            'TT Entregadas': 50,
            'TT Encuesta': 80,
        },
        {
            name: 'Page B',
            'TT Entregadas': 86,
            'TT Encuesta': 96,
        },
        {
            name: 'Page C',
            'TT Entregadas': 37,
            'TT Encuesta': 18,
        },
        {
            name: 'Page D',
            'TT Entregadas': 14,
            'TT Encuesta': 12,
        },
        {
            name: 'Page E',
            'TT Entregadas': 52,
            'TT Encuesta': 18,
        },
        {
            name: 'Page F',
            'TT Entregadas': 14,
            'TT Encuesta': 68,
        },
    ]

    const dataMaiz = [
        {
            name: 'Page A',
            'TT Entregadas': 50,
            'TT Encuesta': 80,
        },
        {
            name: 'Page B',
            'TT Entregadas': 86,
            'TT Encuesta': 96,
        },
        {
            name: 'Page C',
            'TT Entregadas': 85,
            'TT Encuesta': 100,
        },
        {
            name: 'Page D',
            'TT Entregadas': 10,
            'TT Encuesta': 12,
        },
        {
            name: 'Page E',
            'TT Entregadas': 92,
            'TT Encuesta': 58,
        },
        {
            name: 'Page F',
            'TT Entregadas': 35,
            'TT Encuesta': 40,
        },
    ]

    const dataTrigo = [
        {
            name: 'Page A',
            'TT Entregadas': 52,
            'TT Encuesta': 64,
        },
        {
            name: 'Page B',
            'TT Entregadas': 16,
            'TT Encuesta': 74,
        },
        {
            name: 'Page C',
            'TT Entregadas': 36,
            'TT Encuesta': 100,
        },
        {
            name: 'Page D',
            'TT Entregadas': 15,
            'TT Encuesta': 46,
        },
        {
            name: 'Page E',
            'TT Entregadas': 14,
            'TT Encuesta': 23,
        },
        {
            name: 'Page F',
            'TT Entregadas': 62,
            'TT Encuesta': 15,
        },
    ]

    const dataOtrosGranos = [
        {
            name: 'Page A',
            'TT Entregadas': 20,
            'TT Encuesta': 30,
        },
        {
            name: 'Page B',
            'TT Entregadas': 56,
            'TT Encuesta': 36,
        },
        {
            name: 'Page C',
            'TT Entregadas': 15,
            'TT Encuesta': 40,
        },
        {
            name: 'Page D',
            'TT Entregadas': 50,
            'TT Encuesta': 77,
        },
        {
            name: 'Page E',
            'TT Entregadas': 22,
            'TT Encuesta': 18,
        },
        {
            name: 'Page F',
            'TT Entregadas': 45,
            'TT Encuesta': 60,
        }
    ]


    let data;
    switch (activeKey) {
        case '1':
            data = isDataTotal;
            break;
        case '2':
            data = dataSoja;
            break;
        case '3':
            data = dataTrigo;
            break;
        case '4':
            data = dataMaiz;
            break;
        case '5':
            data = dataOtrosGranos;
            break;
        default:
            data = isDataTotal;
            break;
    }




    const handleOnChange = (key) => {
        console.log(infoEvo);
        setActiveKey(key);
        // console.log("isDataTotal: ", isDataTotal)
    };


    // infoEvo.kil = TT Entregadas
    // infoEvo.tt_est = TT Encuesta
    const [isDataTotal, setIsDataTotal] = useState([]);
    useEffect(() => {
        if (infoEvo.length > 0) {
            setIsDataTotal(
            infoEvo.map((item) => {
              return {
                cosecha: item.acos_desc,
                Entregadas: item.kil,
                Encuesta: item.tt_est,
              };
            })
          );
        }
        console.log("isDataTotal: ", isDataTotal)
      }, [infoEvo]);

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
                        height={200}
                        data={isDataTotal}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} horizontal={true} />
                        <XAxis scale="band"  />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Legend />

                        {/* Se agregaron los data para probar */}
                        <Bar dataKey='Entregadas' barSize={20} fill="#8fd14a" legendType='circle'>
                            <LabelList dataKey="cosecha" position="bottom" tick={{ fontSize: 11 }}/>
                        </Bar> 
                        <Line type="monotone" dataKey='Encuesta' stroke="#00b33b" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
