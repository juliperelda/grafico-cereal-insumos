import { Tabs } from 'antd'
import React from 'react'
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


    const data = [
        {
          name: 'Page A',
          'Compra U$S': 590,
          'Estimado U$S': 800,
        },
        {
          name: 'Page B',
          'Compra U$S': 868,
          'Estimado U$S': 967,
        },
        {
          name: 'Page C',
          'Compra U$S': 1397,
          'Estimado U$S': 1098,
        },
        {
          name: 'Page D',
          'Compra U$S': 1480,
          'Estimado U$S': 1200,
        },
        {
          name: 'Page E',
          'Compra U$S': 1520,
          'Estimado U$S': 1108,
        },
        {
          name: 'Page F',
          'Compra U$S': 1400,
          'Estimado U$S': 680,
        },
      ];

    return (
        <div className='divContainerPestañasInsumos'>
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
