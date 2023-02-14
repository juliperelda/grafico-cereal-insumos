import { Card } from 'antd';
import React from 'react';
import { GraficoCerealEntregado } from '../analisisCerealEntregado/GraficoCerealEntregado'
import { AnalisisInsumosComprados } from '../analisisInsumosComprados/AnalisisInsumosComprados';
import "./analisis.css";
export const Analisis = () => {
    return (
        <>
            <div className="divContainer">
                <Card className="cardGraficoCerealEntregado" style={{ width: "100%" }}>
                    <h1 className="titulos">ANALISIS CEREAL ENTREGADO</h1>
                    <GraficoCerealEntregado />
                </Card>
                <Card className="cardGraficoInsumosComprados" style={{ width: "100%" }}>
                    <h1 className="titulos">ANALISIS INSUMOS COMPRADOS</h1>
                    <AnalisisInsumosComprados />
                </Card>
            </div>
        </>
    )
}
