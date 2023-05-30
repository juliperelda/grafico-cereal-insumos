import React, { useContext, useEffect, useState } from 'react';
import { Spin, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ComposedChart, Line, Bar, LabelList } from 'recharts';
import { GlobalContext } from '../../context/GlobalContext';
import './graficoCerealEntregado.css';

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

    const URL = process.env.REACT_APP_URL;

    const [isLoading, setIsLoading] = useState(1);

    const handleChangeTab = (key) => {
        setActiveKey(key)
        setIsLoading(1)
    }

    useEffect(() => {
        if (isLoading > 0) {
            setTimeout(() => {
                setIsLoading(isLoading - 1);
            }, 1000);
        } else {
            setIsLoading(0)
        }

    }, [isLoading])


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
    const [isValorEntregadas, setIsValorEntregadas] = useState(true);
    const [isValorEncuesta, setIsValorEncuesta] = useState(true);

    /*------------------Inicio DataTotal----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoDataTotal(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch(`${URL}gra_analisisTotal.php`, {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoTotal(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataTotal(idCliente);
    }, [idCliente]);

    const [isDataTotal, setIsDataTotal] = useState([]);
    useEffect(() => {
        if (infoTotal.length > 0) {
            setIsDataTotal(
                infoTotal.map((item) => {
                    const entregadas = item.kil === 0 ? 0 : item.kil;
                    const encuesta = item.tt_est === 0 ? 0 : item.tt_est;
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: entregadas,
                        Encuesta: encuesta,
                        Porcentaje: '(' + (parseInt(item.tt_est) !== 0 ? ((parseInt(item.kil) * 100 / parseInt(item.tt_est)).toFixed(0)) : 0) + '%)'
                    };
                })
            );
        }
    }, [infoTotal]);
    /*------------------Fin DataTotal----------------------*/

    /*------------------Inicio DataSoja----------------------*/
    function InfoDataSoja(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch(`${URL}gra_analisisSoja.php`, {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisSoja.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoSoja(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataSoja(idCliente);
    }, [idCliente]);

    const [isDataSoja, setIsDataSoja] = useState([]);
    useEffect(() => {
        if (infoSoja.length > 0) {
            setIsDataSoja(
                infoSoja.map((item) => {
                    const entregadas = item.kil === 0 ? 0 : item.kil;
                    const encuesta = item.tt_est === 0 ? 0 : item.tt_est;
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: entregadas,
                        Encuesta: encuesta,
                        Porcentaje: '(' + (parseInt(item.tt_est) !== 0 ? ((parseInt(item.kil) * 100 / parseInt(item.tt_est)).toFixed(0)) : 0) + '%)'
                    };
                })
            );
        }
    }, [infoSoja]);
    /*------------------Fin DataSoja----------------------*/


    /*------------------Inicio DataTrigo----------------------*/
    function InfoDataTrigo(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch(`${URL}gra_analisisTrigo.php`, {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTrigo.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoTrigo(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataTrigo(idCliente);
    }, [idCliente]);

    const [isDataTrigo, setIsDataTrigo] = useState([]);
    useEffect(() => {
        if (infoTrigo.length > 0) {
            setIsDataTrigo(
                infoTrigo.map((item) => {
                    const entregadas = item.kil === 0 ? 0 : item.kil;
                    const encuesta = item.tt_est === 0 ? 0 : item.tt_est;
                    // const porcentaje = encuesta === 0 ? 0 : ((entregadas * 100 / encuesta).toFixed(0));
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: entregadas,
                        Encuesta: encuesta,
                        Porcentaje: '(' + (parseInt(item.tt_est) !== 0 ? ((parseInt(item.kil) * 100 / parseInt(item.tt_est)).toFixed(0)) : 0) + '%)'
                    };
                })
            );
        }
    }, [infoTrigo]);
    /*------------------Fin DataTrigo----------------------*/


    /*------------------Inicio DataMaiz----------------------*/
    function InfoDataMaiz(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch(`${URL}gra_analisisMaiz.php`, {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisMaiz.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoMaiz(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataMaiz cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataMaiz(idCliente);
    }, [idCliente]);

    const [isDataMaiz, setIsDataMaiz] = useState([]);
    useEffect(() => {
        if (infoMaiz.length > 0) {
            setIsDataMaiz(
                infoMaiz.map((item) => {
                    const entregadas = item.kil === 0 ? 0 : item.kil;
                    const encuesta = item.tt_est === 0 ? 0 : item.tt_est;
                    // const porcentaje = encuesta === 0 ? 0 : ((entregadas * 100 / encuesta).toFixed(0));
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: entregadas,
                        Encuesta: encuesta,
                        Porcentaje: '(' + (parseInt(item.tt_est) !== 0 ? ((parseInt(item.kil) * 100 / parseInt(item.tt_est)).toFixed(0)) : 0) + '%)'
                    };
                })
            );
        }
    }, [infoMaiz]);
    /*------------------Fin DataMaiz----------------------*/

    /*------------------Inicio DataOtrosGranos----------------------*/
    function InfoDataOtrosGranos(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch(`${URL}gra_analisisOtrosGranos.php`, {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisOtrosGranos.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoOtrosGranos(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataOtrosGranos(idCliente);
    }, [idCliente]);

    const [isDataOtrosGranos, setIsDataOtrosGranos] = useState([]);
    useEffect(() => {
        if (infoOtrosGranos.length > 0) {
            setIsDataOtrosGranos(
                infoOtrosGranos.map((item) => {
                    const entregadas = item.kil === 0 ? 0 : item.kil;
                    const encuesta = item.tt_est === 0 ? 0 : item.tt_est;
                    // const porcentaje = encuesta === 0 ? 0 : ((entregadas * 100 / encuesta).toFixed(0));
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: entregadas,
                        Encuesta: encuesta,
                        Porcentaje: '(' + (parseInt(item.tt_est) !== 0 ? ((parseInt(item.kil) * 100 / parseInt(item.tt_est)).toFixed(0)) : 0) + '%)'
                    };
                })
            );
        }
    }, [infoOtrosGranos]);
    /*------------------Fin DataOtrosGranos----------------------*/


    let data;
    switch (activeKey) {
        case '1':
            data = isDataTotal;
            break;
        case '2':
            data = isDataSoja;
            break;
        case '3':
            data = isDataTrigo;
            break;
        case '4':
            data = isDataMaiz;
            break;
        case '5':
            data = isDataOtrosGranos;
            break;
        default:
            data = isDataTotal;
            break;
    }



    // const CustomTooltip = ({ active, payload, label }) => {
    //     //PAARA VER AMBAS BARRAS
    //     <div className="custom-tooltip" style={{ border: "3px solid grey", backgroundColor: "#FFFF", padding: "10px", borderRadius: "4px" }}>
    //         <p className="label" style={{ color: "grey", fontWeight: "500" }}>{`Cosecha: ${label}`}</p>
    //         <p className="propias" style={{ color: "#a3ef95", fontWeight: "500" }}>{`TT Entegradas: ${Math.trunc(payload[0].value)}`}</p>
    //         <p className="alquiladas" style={{ color: "#434348", fontWeight: "500" }}>{`Encuesta: ${Math.trunc(payload[1].value)}`}</p>
    //     </div>
    // };


    /*-----------------------------------*/

    const handleLegendClick = (x) => {
        console.log(x);
        console.log("click");
        if (x.value === "TT Entregadas") {
            console.log("seleccionaste Entregadas");
            setIsValorEntregadas(!isValorEntregadas);
        }

        if (x.value === "TT Encuesta") {
            console.log("seleccionaste Encuesta");
            setIsValorEncuesta(!isValorEncuesta);
        }
    };


    // const total = [

    //     {
    //         "cosecha": "1718",
    //         "Entregadas": "89000",
    //         "Encuesta": "0"
    //     },
    //     {
    //         "cosecha": "1819",
    //         "Entregadas": "89000",
    //         "Encuesta": "0"
    //     },
    //     {
    //         "cosecha": "1920",
    //         "Entregadas": "89000",
    //         "Encuesta": "0"
    //     },
    //     {
    //         "cosecha": "2021",
    //         "Entregadas": "0",
    //         "Encuesta": "66800"
    //     }

    // ]

    // const soja = [
    //     { "cosecha": "2021", "Entregadas": "0", "Encuesta": "4800" }
    // ]

    const allData = activeKey === '1' ? isDataTotal :
        activeKey === '2' ? isDataSoja :
            activeKey === '3' ? isDataTrigo :
                activeKey === '4' ? isDataMaiz :
                    isDataOtrosGranos;

    const barDataMax = Math.max(...allData.map(item => item.Entregadas));
    const lineDataMax = Math.max(...allData.map(item => item.Encuesta));
    const combinedMax = Math.max(barDataMax, lineDataMax);



    return (
        <>
            <div className='divContainerPestañas'>
                {
                    isLoading > 0 ?
                        <Tabs
                            className='tabs-custom'
                            activeKey={activeKey}
                            onChange={(key) => handleChangeTab(key)}
                        >
                            {items.map((item) => (
                                <TabPane
                                    disabled={true}
                                    key={item.key}
                                    tab={item.label}>
                                    {/* {item.children} */}
                                </TabPane>
                            ))}
                        </Tabs>
                        :
                        <Tabs
                            className='tabs-custom'
                            activeKey={activeKey}
                            onChange={(key) => handleChangeTab(key)}
                        >
                            {items.map((item) => (
                                <TabPane
                                    key={item.key}
                                    tab={item.label}>
                                </TabPane>
                            ))}
                        </Tabs>

                }

                {
                    isLoading > 0 ? <Spin className='prueba' tip="Loading" size="large" style={{ borderColor: 'red' }} > <div className="SpinLoading" /> </Spin> :
                        <ResponsiveContainer >
                            <ComposedChart
                                width={500}
                                height={250}
                                data={
                                    activeKey === '1' ? isDataTotal :
                                        activeKey === '2' ? isDataSoja :
                                            activeKey === '3' ? isDataTrigo :
                                                activeKey === '4' ? isDataMaiz :
                                                    isDataOtrosGranos
                                }
                                margin={{
                                    top: 40,
                                    right: 40,
                                    bottom: 40,
                                    left: 40,
                                }}
                            >
                                <CartesianGrid vertical={false} horizontal={true} />
                                <XAxis dataKey="cosecha" tick={() => null} />
                                {/* <YAxis tick={{ fontSize: 11 }} label={{ value: 'TT', angle: -90, position: 'insideLeft', offset: -5, fontSize: "13px" }} /> */}
                                <YAxis domain={[0, combinedMax]} tick={{ fontSize: 11 }} label={{ value: 'TT', angle: -90, position: 'insideLeft', offset: -5, fontSize: "13px" }} />
                                <Tooltip
                                // content={CustomTooltip}
                                />
                                <Legend
                                    onClick={(x) => handleLegendClick(x)}
                                />
                                {isValorEntregadas ? (
                                    <Bar dataKey='Entregadas' name="TT Entregadas" barSize={50} fill="#A2E270" legendType='circle'>
                                        <LabelList dataKey="cosecha" position="bottom" fontSize={13} />
                                        <LabelList dataKey="Porcentaje" position="bottom" dy={13} fontSize={13} />
                                    </Bar>
                                ) : (
                                    <Bar dataKey={0} name="TT Entregadas" barSize={50} fill="#d8d8d8" legendType='circle'>
                                        <LabelList dataKey="cosecha" position="bottom" fontSize={13} />
                                        <LabelList dataKey="Porcentaje" position="bottom" dy={13} fontSize={13} />
                                    </Bar>
                                )}
                                {isValorEncuesta ? (
                                    <Line type="monotone" name="TT Encuesta" dataKey='Encuesta' stroke="#0B780F" strokeWidth={2} />
                                ) : (
                                    <Line type="monotone" name="TT Encuesta" dataKey={0} stroke="#d8d8d8" strokeWidth={2} />
                                )}
                            </ComposedChart>
                        </ResponsiveContainer>
                }
            </div>
        </>
    )
}



