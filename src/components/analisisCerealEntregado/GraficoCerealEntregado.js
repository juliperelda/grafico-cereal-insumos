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

    const [activeKey, setActiveKey] = useState(items[0].key);


    const dataTotal = [
        {
            name: 'Page A',
            'TT Entregadas': 90,
            'TT Encuesta': 80,
        },
        {
            name: 'Page B',
            'TT Entregadas': 68,
            'TT Encuesta': 67,
        },
        {
            name: 'Page C',
            'TT Entregadas': 97,
            'TT Encuesta': 98,
        },
        {
            name: 'Page D',
            'TT Entregadas': 14,
            'TT Encuesta': 12,
        },
        {
            name: 'Page E',
            'TT Entregadas': 15,
            'TT Encuesta': 11,
        },
        {
            name: 'Page F',
            'TT Entregadas': 40,
            'TT Encuesta': 68,
        },
    ];

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
            data = dataTotal;
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
            data = dataTotal;
            break;
    }






    return (
        <div className='divContainerPestañas'>
            {/* <Tabs
            className='tabs-custom'
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
        /> */}

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
                    <Bar dataKey='TT Entregadas' barSize={20} fill="#8fd14a" legendType='circle' />
                    <Line type="monotone" dataKey='TT Encuesta' stroke="#00b33b" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}
