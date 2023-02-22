import { Spin, Tabs } from 'antd';
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

    // const [tabDisabled, setTabDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(1);

    const handleChangeTab = (key) => {
        // setTabDisabled(true);
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
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", "2049");
        // fetch("../com_graEvolucionData.php", {
        // fetch("../gra_analisisTotal.php", {
        fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
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
        // console.log("isDataTotal: ", isDataTotal)
    }, [infoTotal]);
    /*------------------Fin DataTotal----------------------*/





    /*------------------Inicio DataSoja----------------------*/
    function InfoDataSoja(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../gra_analisisSoja.php", {
        fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
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
        console.log("isDataSoja2: ", isDataSoja)
    }, [infoSoja]);

    const [isDataSoja, setIsDataSoja] = useState([]);
    useEffect(() => {
        if (infoSoja.length > 0) {
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


    /*------------------Inicio DataTrigo----------------------*/
    function InfoDataTrigo(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../gra_analisisSoja.php", {
        fetch("http://10.0.0.28/tati/modulos/gra_analisisTrigo.php", {
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
                setInfoTrigo(objetoData);
                console.log("objetoData: ", objetoData)
                // console.log("data: ", data)
                // console.log("infoTrigo: ", infoTrigo)
                console.log("isDataTrigo4: ", isDataTrigo)
            });
        });
        // console.log("infoTotal: ", infoTotal)
    }

    useEffect(() => {
        console.log("idCliente: ", idCliente)
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataTrigo(idCliente);
        console.log("infoTrigo2: ", infoTrigo);
        console.log("isDataTrigo3: ", isDataTrigo)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoTrigo actualizado: ", infoTrigo);
        console.log("isDataTrigo2: ", isDataTrigo)
    }, [infoTrigo]);

    const [isDataTrigo, setIsDataTrigo] = useState([]);
    useEffect(() => {
        if (infoTrigo.length > 0) {
            setIsDataTrigo(
                infoTrigo.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
        console.log("isDataTrigo: ", isDataTrigo)
    }, [infoTrigo]);
    /*------------------Fin DataTrigo----------------------*/


    /*------------------Inicio DataMaiz----------------------*/
    function InfoDataMaiz(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../gra_analisisSoja.php", {
        fetch("http://10.0.0.28/tati/modulos/gra_analisisMaiz.php", {
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
                setInfoMaiz(objetoData);
                console.log("objetoData: ", objetoData)
                // console.log("data: ", data)
                // console.log("infoMaiz: ", infoMaiz)
                console.log("isDataMaiz4: ", isDataMaiz)
            });
        });
        // console.log("infoMaiz: ", infoMaiz)
    }

    useEffect(() => {
        console.log("idCliente: ", idCliente)
        // Llama a la función InfoDataMaiz cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataMaiz(idCliente);
        console.log("infoMaiz2: ", infoMaiz);
        console.log("isDataMaiz3: ", isDataMaiz)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoMaiz actualizado: ", infoMaiz);
        console.log("isDataMaiz2: ", isDataMaiz)
    }, [infoMaiz]);

    const [isDataMaiz, setIsDataMaiz] = useState([]);
    useEffect(() => {
        if (infoMaiz.length > 0) {
            setIsDataMaiz(
                infoMaiz.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
        console.log("isDataMaiz: ", isDataMaiz)
    }, [infoMaiz]);
    /*------------------Fin DataMaiz----------------------*/

    /*------------------Inicio DataOtrosGranos----------------------*/
    function InfoDataSoja(idCliente) {
        console.log("idCliente: ", idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        // fetch("../gra_analisisSoja.php", {
        fetch("http://10.0.0.28/tati/modulos/gra_analisisOtrosGranos.php", {
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
                // console.log("infoOtrosGranos: ", infoOtrosGranos)
                console.log("isDataOtrosGranos4: ", isDataOtrosGranos)
            });
        });
        // console.log("infoOtrosGranos: ", infoOtrosGranos)
    }

    useEffect(() => {
        console.log("idCliente: ", idCliente)
        // Llama a la función InfoDataSoja cuando el componente se monta y cuando el ID del cliente cambia.
        InfoDataSoja(idCliente);
        console.log("infoOtrosGranos2: ", infoOtrosGranos);
        console.log("isDataOtrosGranos3: ", isDataOtrosGranos)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoOtrosGranos actualizado: ", infoOtrosGranos);
        console.log("isDataOtrosGranos2: ", isDataOtrosGranos)
    }, [infoOtrosGranos]);

    const [isDataOtrosGranos, setIsDataOtrosGranos] = useState([]);
    useEffect(() => {
        if (infoOtrosGranos.length > 0) {
            setIsDataOtrosGranos(
                infoOtrosGranos.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
        console.log("isDataOtrosGranos: ", isDataOtrosGranos)
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




    const handleOnChange = (key) => {
        console.log(infoTotal);
        setActiveKey(key);
        // console.log("isDataTotal: ", isDataTotal)
    };







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
        if (x.value === "Entregadas") {
            console.log("seleccionaste Entregadas");
            setIsValorEntregadas(!isValorEntregadas);
        }

        if (x.value === "Encuesta") {
            console.log("seleccionaste Encuesta");
            setIsValorEncuesta(!isValorEncuesta);
        }
    };


    const total = [

        {
            "cosecha": "1718",
            "Entregadas": "89000",
            "Encuesta": "0"
        },
        {
            "cosecha": "1819",
            "Entregadas": "89000",
            "Encuesta": "0"
        },
        {
            "cosecha": "1920",
            "Entregadas": "89000",
            "Encuesta": "0"
        },
        {
            "cosecha": "2021",
            "Entregadas": "0",
            "Encuesta": "66800"
        }

    ]

    const soja = [
        { "cosecha": "2021", "Entregadas": "0", "Encuesta": "4800" }
    ]


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
                                    // disabled={tabDisabled} 
                                    key={item.key}
                                    tab={item.label}>
                                    {/* {item.children} */}
                                </TabPane>
                            ))}
                        </Tabs>

                }

                {
                    isLoading > 0 ? <Spin className='prueba' tip="Loading" size="large" style={{ borderColor: 'red' }} > <div className="SpinLoading" /> </Spin> :
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={250}
                                // data={isDataSoja}
                                data={
                                    // activeKey === '1' ? total : //isDataTotal
                                    //     activeKey === '2' ? soja : total //isDataSoja : isDataTotal
                                    // activeKey === '3' ? isDataTrigo : 
                                    // activeKey === '4' ? isDataMaiz : 
                                    // isDataOtrosGranos

                                    activeKey === '1' ? isDataTotal :
                                    activeKey === '2' ? isDataSoja :
                                    activeKey === '3' ? isDataTrigo : 
                                    activeKey === '4' ? isDataMaiz : 
                                    isDataOtrosGranos
                                }
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid vertical={false} horizontal={true} />
                                <XAxis dataKey="cosecha" tick={() => null} />
                                <YAxis tick={{ fontSize: 11 }} />
                                <Tooltip
                                // content={CustomTooltip}
                                />
                                <Legend
                                    onClick={(x) => handleLegendClick(x)}
                                />
                                {isValorEntregadas ? (
                                    <Bar dataKey='Entregadas' name="Entregadas" barSize={50} fill="#8fd14a" legendType='circle'>
                                        <LabelList dataKey="cosecha" position="bottom" />
                                    </Bar>
                                ) : (
                                    <Bar dataKey={0} name="Entregadas" barSize={50} fill="#8fd14a" legendType='circle'>
                                        <LabelList dataKey="cosecha" position="bottom" />
                                    </Bar>
                                )}
                                {isValorEncuesta ? (
                                    <Line type="monotone" name="Encuesta" dataKey='Encuesta' stroke="#00b33b" strokeWidth={2} />
                                ) : (
                                    <Line type="monotone" name="Encuesta" dataKey={0} stroke="#00b33b" strokeWidth={2} />
                                )}

                                {/* <Bar dataKey='Entregadas' barSize={50} fill="#8fd14a" legendType='circle'>
                                    <LabelList dataKey="cosecha" position="bottom" />
                                 </Bar>
                                <Line type="monotone" dataKey='Encuesta' stroke="#00b33b" strokeWidth={2} />  */}
                            </ComposedChart>
                        </ResponsiveContainer>
                }
            </div>
        </>
    )
}



