import { Spin, Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React, { useContext, useEffect, useState } from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'
import { GlobalContext } from '../../context/GlobalContext'
import './analisisInsumosComprados.css'


// [SCORING]
const TIPO = "nosis";

// [ANALISIS_INSUMOS]
const AGROQUIMICOS = " (1, 7, 8, 9)";
const FERTILIZANTES = " (0)";
const SEMILLAS = " (2, 3, 5, 6)";


export const AnalisisInsumosComprados = () => {

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

    const items = [
        {
            key: '1',
            label: `TOTAL`,
            children: `TOTAL 1`,
        },
        {
            key: '2',
            label: `AGROQUIMICOS`,
            children: `AGROQUIMICOS 2`,
        },
        {
            key: '3',
            label: `SEMILLAS`,
            children: `SEMILLAS 3`,
        },
        {
            key: '4',
            label: `FERTILIZANTES`,
            children: `FERTILIZANTES 4`,
        },
    ];

    const {
        idCliente, //Probando
        setIdCliente,
        infoInsumoTotal,
        setInfoInsumoTotal,
        infoInsumoAgroquimicos,
        setInfoInsumoAgroquimicos,
        infoInsumoSemillas,
        setInfoInsumoSemillas,
        infoInsumoFertilizantes,
        setInfoInsumoFertilizantes,
    } = useContext(GlobalContext);

    const [activeKey, setActiveKey] = useState(items[0].key);
    const [isValorCompra, setIsValorCompra] = useState(true);
    const [isValorEstimado, setIsValorEstimado] = useState(true);


    /*------------------Inicio DataTotal----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoInsumosTotales(idCliente) {
        console.log(idCliente)
        const data = new FormData();
        data.append("idC", idCliente);
        fetch("../gra_insumoTotal.php", {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                console.log("resp", resp)
                const data = resp.substring(resp.indexOf('['));
                console.log("data", data)
                var objetoData = JSON.parse(data);
                console.log("objetoData",objetoData)
                setInfoInsumoTotal(objetoData);
                console.log("setInfoInsumoTotal", infoInsumoTotal)
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoInsumosTotales(idCliente);
        console.log("setInfoInsumoTotal", setInfoInsumoTotal)
    }, [idCliente]);

    useEffect(() => {
        console.log("infoTotal actualizado: ", infoInsumoTotal);
        console.log("isDataInsumoTotal2: ",isDataInsumoTotal)
    }, [infoInsumoTotal]);

    const [isDataInsumoTotal, setIsDataInsumoTotal] = useState([]);
    useEffect(() => {
        if (infoInsumoTotal.length > 0) {
            setIsDataInsumoTotal(
                infoInsumoTotal.map((item) => {
                    return {
                        cosecha: item.eje,
                        Compra: item.imp2,
                        Estimado: item.cos_est,
                    };
                })
            );
        }
    }, [infoInsumoTotal]);
    /*------------------Fin DataTotal----------------------*/

    /*------------------Inicio DataAgroquimicos----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoInsumosAgroquimicos(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch("../gra_insumoAgroquimicos.php", {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoInsumoAgroquimicos(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoInsumosAgroquimicos(idCliente);
    }, [idCliente]);

    const [isDataInsumoAgroquimicos, setIsDataInsumoAgroquimicos] = useState([]);
    useEffect(() => {
        if (infoInsumoAgroquimicos.length > 0) {
            setIsDataInsumoAgroquimicos(
                infoInsumoAgroquimicos.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
    }, [infoInsumoAgroquimicos]);
    /*------------------Fin DataAgroquimicos----------------------*/

    /*------------------Inicio DataSemillas----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoInsumosSemillas(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch("../gra_insumoSemillas.php", {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoInsumoSemillas(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoInsumosSemillas(idCliente);
    }, [idCliente]);

    const [isDataInsumoSemillas, setIsDataInsumoSemillas] = useState([]);
    useEffect(() => {
        if (infoInsumoSemillas.length > 0) {
            setIsDataInsumoSemillas(
                infoInsumoSemillas.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
    }, [infoInsumoSemillas]);
    /*------------------Fin DataAgroquimicos----------------------*/

    /*------------------Inicio DataFertilizantes----------------------*/
    //*Llama y trae los datos de la consulta php
    function InfoInsumosFertilizantes(idCliente) {
        const data = new FormData();
        data.append("idC", idCliente);
        fetch("../gra_insumoFertilizantes.php", {
            // fetch("http://10.0.0.28/tati/modulos/gra_analisisTotal.php", {
            method: "POST",
            body: data,
        }).then(function (response) {
            response.text().then((resp) => {
                const data = resp.substring(resp.indexOf('['));
                var objetoData = JSON.parse(data);
                setInfoInsumoFertilizantes(objetoData);
            });
        });
    }

    useEffect(() => {
        // Llama a la función InfoDataTotal cuando el componente se monta y cuando el ID del cliente cambia.
        InfoInsumosFertilizantes(idCliente);
    }, [idCliente]);

    const [isDataInsumoFertilizantes, setIsDataInsumoFertilizantes] = useState([]);
    useEffect(() => {
        if (infoInsumoFertilizantes.length > 0) {
            setIsDataInsumoFertilizantes(
                infoInsumoFertilizantes.map((item) => {
                    return {
                        cosecha: item.acos_desc,
                        Entregadas: item.kil,
                        Encuesta: item.tt_est,
                    };
                })
            );
        }
    }, [infoInsumoFertilizantes]);
    /*------------------Fin DataFertilizantes----------------------*/



    let data;
    switch (activeKey) {
        case '1':
            data = isDataInsumoTotal;
            break;
        case '2':
            data = isDataInsumoAgroquimicos;
            break;
        case '3':
            data = isDataInsumoSemillas;
            break;
        case '4':
            data = isDataInsumoFertilizantes;
            break;
        default:
            data = isDataInsumoTotal;
            break;
    }

    const handleLegendClick = (x) => {
        console.log(x);
        console.log("click");
        if (x.value === "Compra U$S") {
            console.log("seleccionaste Compra");
            setIsValorCompra(!isValorCompra);
        }

        if (x.value === "Estimado U$S") {
            console.log("seleccionaste Estimado");
            setIsValorEstimado(!isValorEstimado);
        }
    };




    return (
        <div className='divContainerPestañasInsumos'>

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
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={250}
                            data={
                                activeKey === '1' ? isDataInsumoTotal :
                                    activeKey === '2' ? isDataInsumoAgroquimicos :
                                        activeKey === '3' ? isDataInsumoSemillas :
                                            isDataInsumoFertilizantes
                            }
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid vertical={false} horizontal={true} />
                            <XAxis dataKey="cosecha" tick={() => null} scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend
                                onClick={(x) => handleLegendClick(x)}
                            />

                            {isValorCompra ? (
                                <Bar dataKey='Compra U$S' name="Compra U$S" barSize={20} fill="#4ed9fc" legendType='circle' />
                            ) : (
                                <Bar dataKey={0} name="Compra U$S" barSize={20} fill="#4ed9fc" legendType='circle' />
                            )}
                            {isValorEstimado ? (
                                <Line type="monotone" name="Estimado U$S" dataKey='Estimado U$S' stroke="#32586E" />
                            ) : (
                                <Line type="monotone" name="Estimado U$S" dataKey={0} stroke="#32586E" />
                            )}
                        </ComposedChart>
                    </ResponsiveContainer>
            }
        </div>
    )
}
