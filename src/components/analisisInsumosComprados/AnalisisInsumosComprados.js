import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React, { useState } from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'
import './analisisInsumosComprados.css'


export const AnalisisInsumosComprados = () => {

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

    // const dataa = [
    //     { x: 100, y: 200, z: 200 },
    //     { x: 50, y: 100, z: 260 },
    // ];


    const [activeKey, setActiveKey] = useState(items[0].key);


    const dataTotal = [
        {
            name: 'Page A',
            'Compra U$S': 20,
            'Estimado U$S': 10,
        },
        {
            name: 'Page B',
            'Compra U$S': 58,
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
            'Estimado U$S': 22,
        },
        {
            name: 'Page E',
            'Compra U$S': 15,
            'Estimado U$S': 41,
        },
        {
            name: 'Page F',
            'Compra U$S': 20,
            'Estimado U$S': 68,
        },
    ];

    const dataAgroquimicos = [
        {
            name: 'Page A',
            'Compra U$S': 10,
            'Estimado U$S': 20,
        },
        {
            name: 'Page B',
            'Compra U$S': 46,
            'Estimado U$S': 36,
        },
        {
            name: 'Page C',
            'Compra U$S': 57,
            'Estimado U$S': 68,
        },
        {
            name: 'Page D',
            'Compra U$S': 14,
            'Estimado U$S': 22,
        },
        {
            name: 'Page E',
            'Compra U$S': 62,
            'Estimado U$S': 58,
        },
        {
            name: 'Page F',
            'Compra U$S': 74,
            'Estimado U$S': 88,
        },
    ]

    const dataSemillas = [
        {
            name: 'Page A',
            'Compra U$S': 20,
            'Estimado U$S': 30,
        },
        {
            name: 'Page B',
            'Compra U$S': 46,
            'Estimado U$S': 36,
        },
        {
            name: 'Page C',
            'Compra U$S': 55,
            'Estimado U$S': 40,
        },
        {
            name: 'Page D',
            'Compra U$S': 20,
            'Estimado U$S': 32,
        },
        {
            name: 'Page E',
            'Compra U$S': 42,
            'Estimado U$S': 38,
        },
        {
            name: 'Page F',
            'Compra U$S': 65,
            'Estimado U$S': 30,
        },
    ]

    const dataFertilizantes = [
        {
            name: 'Page A',
            'Compra U$S': 42,
            'Estimado U$S': 34,
        },
        {
            name: 'Page B',
            'Compra U$S': 56,
            'Estimado U$S': 24,
        },
        {
            name: 'Page C',
            'Compra U$S': 56,
            'Estimado U$S': 15,
        },
        {
            name: 'Page D',
            'Compra U$S': 11,
            'Estimado U$S': 36,
        },
        {
            name: 'Page E',
            'Compra U$S': 14,
            'Estimado U$S': 13,
        },
        {
            name: 'Page F',
            'Compra U$S': 62,
            'Estimado U$S': 15,
        },
    ]

    let data;
    switch (activeKey) {
        case '1':
            data = dataTotal;
            break;
        case '2':
            data = dataAgroquimicos;
            break;
        case '3':
            data = dataSemillas;
            break;
        case '4':
            data = dataFertilizantes;
            break;
        default:
            data = dataTotal;
            break;
    }




    return (
        <div className='divContainerPestañasInsumos'>

            <Tabs
                className='tabs-custom'
                activeKey={activeKey}
                onChange={setActiveKey}
            >
                {items.map((item) => (
                    <TabPane key={item.key} tab={item.label}>
                        {item.children}
                    </TabPane>
                ))}
            </Tabs>
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
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
                    <Bar dataKey='Compra U$S' barSize={20} fill="#4ed9fc" legendType='circle' />
                    <Line type="monotone" dataKey='Estimado U$S' stroke="#32586E" />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    )
}
