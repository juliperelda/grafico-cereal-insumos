import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useState } from 'react'
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ComposedChart, Line, Bar } from 'recharts';
import './graficoCerealEntregado.css'

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


    const onChange = (key) => {
        console.log(key);
    };
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

    const dataTotal = [
        {
            name: 'Page A',
            'Compra U$S': 90,
            'Estimado U$S': 80,
        },
        {
            name: 'Page B',
            'Compra U$S': 68,
            'Estimado U$S': 67,
        },
        {
            name: 'Page C',
            'Compra U$S': 97,
            'Estimado U$S': 98,
        },
        {
            name: 'Page D',
            'Compra U$S': 14,
            'Estimado U$S': 12,
        },
        {
            name: 'Page E',
            'Compra U$S': 15,
            'Estimado U$S': 11,
        },
        {
            name: 'Page F',
            'Compra U$S': 40,
            'Estimado U$S': 68,
        },
    ];

    const dataSoja = [
        {
            name: 'Page A',
            'Compra U$S': 50,
            'Estimado U$S': 80,
        },
        {
            name: 'Page B',
            'Compra U$S': 86,
            'Estimado U$S': 96,
        },
        {
            name: 'Page C',
            'Compra U$S': 37,
            'Estimado U$S': 18,
        },
        {
            name: 'Page D',
            'Compra U$S': 14,
            'Estimado U$S': 12,
        },
        {
            name: 'Page E',
            'Compra U$S': 52,
            'Estimado U$S': 18,
        },
        {
            name: 'Page F',
            'Compra U$S': 14,
            'Estimado U$S': 68,
        },
    ]

    const dataMaiz = [
        {
            name: 'Page A',
            'Compra U$S': 50,
            'Estimado U$S': 80,
        },
        {
            name: 'Page B',
            'Compra U$S': 86,
            'Estimado U$S': 96,
        },
        {
            name: 'Page C',
            'Compra U$S': 85,
            'Estimado U$S': 100,
        },
        {
            name: 'Page D',
            'Compra U$S': 10,
            'Estimado U$S': 12,
        },
        {
            name: 'Page E',
            'Compra U$S': 92,
            'Estimado U$S': 58,
        },
        {
            name: 'Page F',
            'Compra U$S': 35,
            'Estimado U$S': 40,
        },
    ]

    const dataTrigo = [
        {
            name: 'Page A',
            'Compra U$S': 52,
            'Estimado U$S': 64,
        },
        {
            name: 'Page B',
            'Compra U$S': 16,
            'Estimado U$S': 74,
        },
        {
            name: 'Page C',
            'Compra U$S': 36,
            'Estimado U$S': 100,
        },
        {
            name: 'Page D',
            'Compra U$S': 15,
            'Estimado U$S': 46,
        },
        {
            name: 'Page E',
            'Compra U$S': 14,
            'Estimado U$S': 23,
        },
        {
            name: 'Page F',
            'Compra U$S': 62,
            'Estimado U$S': 15,
        },
    ]

    const dataOtrosGranos = [
        {
            name: 'Page A',
            'Compra U$S': 20,
            'Estimado U$S': 30,
        },
        {
            name: 'Page B',
            'Compra U$S': 56,
            'Estimado U$S': 36,
        },
        {
            name: 'Page C',
            'Compra U$S': 15,
            'Estimado U$S': 40,
        },
        {
            name: 'Page D',
            'Compra U$S': 50,
            'Estimado U$S': 77,
        },
        {
            name: 'Page E',
            'Compra U$S': 22,
            'Estimado U$S': 18,
        },
        {
            name: 'Page F',
            'Compra U$S': 45,
            'Estimado U$S': 60,
        }
    ]

    return (
        <div className='divContainerPestañas'>
            <Tabs
                className='tabs-custom'
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
            />
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={dataTotal}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid vertical={false} horizontal={true} />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Compra U$S' barSize={20} fill="#8fd14a" legendType='circle' />
                    <Line type="monotone" dataKey='Estimado U$S' stroke="#00b33b" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}
