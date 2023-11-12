import React, { PureComponent, useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie
} from 'recharts';
import axios from "axios";

export const Dashboard = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    // const [venta, setVenta] = useState([])
    // useEffect(() => {
    //     axios.get('/api/dashboard/venta/items')
    //         .then(res => {
    //             setVenta(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [])

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('/api/items')
            .then(res => {
                setItems(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const [cat, setCat] = useState([])
    useEffect(() => {
        axios.get('/api/items-categoria')
            .then(res => {
                setCat(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    return (

        <div className="py-16 px-24 font-marcellus">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800">DASHBOARD</h2>
            </div>
            <div className="flex gap-8">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-96"
                    shadow="sm"
                >
                    <CardBody>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-96"
                    shadow="sm"
                >
                    <CardBody>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
            </div>
            <div className="flex pt-12 gap-8">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-96"
                    shadow="sm"
                >
                    <CardBody>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data01}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                    label
                                />
                                {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-96"
                    shadow="sm"
                >
                    <CardBody>

                    </CardBody>
                </Card>
            </div>

        </div>

    )
}
export default Dashboard