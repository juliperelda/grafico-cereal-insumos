import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useState } from 'react'
import { CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ComposedChart, Line, Bar } from 'recharts';
import './graficoCerealEntregado.css'

// const onChange = (key) => {
//     console.log(key);
// };
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


    // const handleChange = (key) => {
    //     switch (key) {
    //         case '1':
    //             setData([
    //                 {
    //                     name: 'Page A',
    //                     'TT Entregadas': 50,
    //                     'TT Encuesta': 80,
    //                 },
    //                 {
    //                     name: 'Page B',
    //                     'TT Entregadas': 86,
    //                     'TT Encuesta': 96,
    //                 },
    //                 {
    //                     name: 'Page C',
    //                     'TT Entregadas': 37,
    //                     'TT Encuesta': 18,
    //                 },
    //                 {
    //                     name: 'Page D',
    //                     'TT Entregadas': 14,
    //                     'TT Encuesta': 12,
    //                 },
    //                 {
    //                     name: 'Page E',
    //                     'TT Entregadas': 52,
    //                     'TT Encuesta': 18,
    //                 },
    //                 {
    //                     name: 'Page F',
    //                     'TT Entregadas': 14,
    //                     'TT Encuesta': 68,
    //                 },]); // set your total data here
    //             break;
    //         case '2':
    //             setData([
    //                 {
    //                     name: 'Page A',
    //                     'TT Entregadas': 50,
    //                     'TT Encuesta': 80,
    //                 },
    //                 {
    //                     name: 'Page B',
    //                     'TT Entregadas': 86,
    //                     'TT Encuesta': 96,
    //                 },
    //                 {
    //                     name: 'Page C',
    //                     'TT Entregadas': 85,
    //                     'TT Encuesta': 100,
    //                 },
    //                 {
    //                     name: 'Page D',
    //                     'TT Entregadas': 10,
    //                     'TT Encuesta': 12,
    //                 },
    //                 {
    //                     name: 'Page E',
    //                     'TT Entregadas': 92,
    //                     'TT Encuesta': 58,
    //                 },
    //                 {
    //                     name: 'Page F',
    //                     'TT Entregadas': 35,
    //                     'TT Encuesta': 40,
    //                 },
    //             ]); // set your soja data here
    //             break;
    //         case '3':
    //             setData([{
    //                 name: 'Page A',
    //                 'TT Entregadas': 52,
    //                 'TT Encuesta': 64,
    //             },
    //             {
    //                 name: 'Page B',
    //                 'TT Entregadas': 16,
    //                 'TT Encuesta': 74,
    //             },
    //             {
    //                 name: 'Page C',
    //                 'TT Entregadas': 36,
    //                 'TT Encuesta': 100,
    //             },
    //             {
    //                 name: 'Page D',
    //                 'TT Entregadas': 15,
    //                 'TT Encuesta': 46,
    //             },
    //             {
    //                 name: 'Page E',
    //                 'TT Entregadas': 14,
    //                 'TT Encuesta': 23,
    //             },
    //             {
    //                 name: 'Page F',
    //                 'TT Entregadas': 62,
    //                 'TT Encuesta': 15,
    //             },]); // set your trigo data here
    //             break;
    //         case '4':
    //             setData([{
    //                 name: 'Page A',
    //                 'TT Entregadas': 24,
    //                 'TT Encuesta': 43,
    //             },
    //             {
    //                 name: 'Page B',
    //                 'TT Entregadas': 12,
    //                 'TT Encuesta': 54,
    //             },
    //             {
    //                 name: 'Page C',
    //                 'TT Entregadas': 21,
    //                 'TT Encuesta': 87,
    //             },
    //             {
    //                 name: 'Page D',
    //                 'TT Entregadas': 34,
    //                 'TT Encuesta': 65,
    //             },
    //             {
    //                 name: 'Page E',
    //                 'TT Entregadas': 12,
    //                 'TT Encuesta': 54,
    //             },
    //             {
    //                 name: 'Page F',
    //                 'TT Entregadas': 65,
    //                 'TT Encuesta': 63,
    //             },]); // set your maiz data here
    //             break;
    //         default:
    //             setData([{
    //                 name: 'Page A',
    //                 'TT Entregadas': 20,
    //                 'TT Encuesta': 30,
    //             },
    //             {
    //                 name: 'Page B',
    //                 'TT Entregadas': 56,
    //                 'TT Encuesta': 36,
    //             },
    //             {
    //                 name: 'Page C',
    //                 'TT Entregadas': 15,
    //                 'TT Encuesta': 40,
    //             },
    //             {
    //                 name: 'Page D',
    //                 'TT Entregadas': 50,
    //                 'TT Encuesta': 77,
    //             },
    //             {
    //                 name: 'Page E',
    //                 'TT Entregadas': 22,
    //                 'TT Encuesta': 18,
    //             },
    //             {
    //                 name: 'Page F',
    //                 'TT Entregadas': 45,
    //                 'TT Encuesta': 60,
    //             },]); // set a default data here
    //     }
    // };


    const data = [
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

    return (
        <div className='divContainerPestañas'>

            {/* <Tabs onChange={handleChange}>
                {items.map((item) => (
                    <TabPane tab={item.label} key={item.key}></TabPane>))}
            </Tabs> */}


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
                    <Bar dataKey='Compra U$S' barSize={20} fill="#8fd14a" legendType='circle' />
                    <Line type="monotone" dataKey='Estimado U$S' stroke="#00b33b" />
                </ComposedChart>
            </ResponsiveContainer>








            {/*             
                <Tabs onChange={onChange}>
                    {items.map(item => (
                        <Tabs.TabPane key={item.key} tab={item.label}>
                            {item.children}
                        </Tabs.TabPane>
                    ))}
                </Tabs>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={chartData}>
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TT Entregadas" barSize={20} fill="#8fd14a" />
                        <Line type="monotone" dataKey="TT Encuesta" stroke="#00b33b" />
                    </ComposedChart>
                </ResponsiveContainer> */}
        </div>
    )
}
