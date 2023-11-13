import React, { PureComponent, useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Sector
} from 'recharts';
import axios from "axios";

export const Dashboard = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    const [venta, setVenta] = useState([])
    useEffect(() => {
        axios.get('/api/dashboard/venta/items')
            .then(res => {
                setVenta(res.data);
            })
            .catch(err => console.log(err));
    }, [])

// Graficas de productos más y menos vendidos
    const agregadosData = venta.reduce((result, item) => {
        const existenteItem = result.find(entry => entry.id_items === item.id_items);

        if (existenteItem) {
            existenteItem.cantidad += item.cantidad;
        } else {
            result.push({ id_items: item.id_items, cantidad: item.cantidad, nombre: item.nombre });
        }
        return result;
    }, []);

    //Ordenar por cantidad de manera descendente
    const ordenVentaDesc = [...agregadosData].sort((a, b) => b.cantidad - a.cantidad);

    // tomar los 5 primeros datos al ordenar
    const top5Items = ordenVentaDesc.slice(0, 5);

    const data = top5Items.map(item => ({
        nombre: item.nombre,
        cantidad: item.cantidad,
    }));

    //Ordenar por cantidad de manera ascendete
    const ordenVentaAsc = [...agregadosData].sort((a, b) => a.cantidad - b.cantidad);
    const top5Items2 = ordenVentaAsc.slice(0, 5);

    const data2 = top5Items2.map(item => ({
        nombre: item.nombre,
        cantidad: item.cantidad,
    }));

// Fin de graficas de productos más y menos vendidos


    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        axios.get('/api/dashboard/categorias')
            .then(res => {
                setCategorias(res.data);
            })
            .catch(err => console.log(err));
    }, []);


// Categorías más vendidas

// Fin de categorías más vendidas

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
            <div className="flex gap-8 h-[25rem] w-full">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2"
                    // shadow="sm"
                >
                    <CardBody>
                        <div className="text-center text-xl">Productos más vendidos</div>
                        <ResponsiveContainer width="90%" height="90%">
                            <BarChart 
                                width={500} 
                                height={300} 
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 10,
                                    left: 10,
                                    bottom: 5,
                                  }}
                                // margin={{ top: 5, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="nombre" className="text-xs"/>
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Bar dataKey="cantidad" fill="#cd9b4a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2"
                    // shadow="sm"
                >
                    <CardBody>
                        <div className="text-center text-xl">Productos menos vendidos</div>
                        <ResponsiveContainer width="90%" height="90%">
                            <BarChart 
                                width={500} 
                                height={300} 
                                data={data2}
                                margin={{
                                    top: 10,
                                    right: 10,
                                    left: 10,
                                    bottom: 5,
                                  }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="nombre" className="text-xs" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Bar dataKey="cantidad" fill="#cd9b4a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
            </div>
            <div className="flex pt-12 gap-8">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-96"
                    // shadow="sm"
                >
                    <CardBody>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="nombre_categoria"
                                    isAnimationActive={false}
                                    data={categorias}
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
                    // shadow="sm"
                >
                    <CardBody>
                        
                    </CardBody>
                </Card>
            </div>

        </div>

    )
}
export default Dashboard