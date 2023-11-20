import React, { PureComponent, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { MdFoodBank, MdViewCarousel, MdSupervisorAccount } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
        PieChart, Pie, Sector
} from 'recharts';
import axios from "axios";



const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.nombre_categoria}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Cantidad ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


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

    const COLORS = ['#fdba74', '#ef4444', '#3b82f6', '#334155'];
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        axios.get('/api/dashboard/categorias')
            .then(res => {
                // console.log(res.data);
                setCategorias(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
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


    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('/api/usuarios')
            .then(res => {
                const clientes = res.data.filter(cliente => cliente.idrol === 1);
                const cantidadClientes = clientes.length;
                setUser(cantidadClientes);
            })
            .catch(err => console.log(err));
    }, [])

    const [reservation, setReservation] = useState([])
    useEffect(() => {
        axios.get('/api/reservacion')
            .then(res => {
                const reser = res.data.filter(reservacion_servicio => reservacion_servicio.observacion === 1);
                const observationreser = reser.length;
                setReservation(observationreser);
            })
            .catch(err => console.log(err));
    }, [])
    


    return (

        <div className="py-16 px-24 font-marcellus">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800">DASHBOARD</h2>
            </div>
            <div>

                <div className="flex gap-8 h-26 w-full">
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-1/3"
                    >
                        <CardBody>
                            <div className="flex px-4">
                                <div className="w-3/4 pr-2">
                                    <div className="text-xl">Ordenes en proceso</div>
                                    <div className="text-3xl text-gray-800 ml-4">2</div>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <MdFoodBank color="#fb923c" size="4em" className="text-center items-center"/>
                                </div>
                            </div>                          
                        </CardBody>
                    </Card>

                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-1/3"
                    >
                        <CardBody>
                            <div className="flex px-4">
                                <div className="w-3/4 pr-2">
                                    <div className="text-xl">Reservaciones</div>
                                    <div className="text-3xl text-gray-800 ml-4">{reservation}</div>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <MdViewCarousel color="#fb923c" size="4em" className="text-center items-center"/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-1/3"
                    >
                        <CardBody>
                            <div className="text-center text-xl">Ordenes en </div>
                            <div className="text-3xl font-bold text-center text-gray-800">{user}</div>
                        </CardBody>
                    </Card> */}

                    <Card
                        isBlurred
                        className="border-none bg-[background/60] dark:bg-default-100/50 w-1/3"
                    >
                        <CardBody>
                            <div className="flex px-4">
                                <div className="w-3/4 pr-2">
                                    <div className="text-xl">Total de clientes</div>
                                    <div className="text-3xl text-gray-800 ml-4">{user}</div>
                                </div>
                                <div className="w-1/4 flex items-center justify-center">
                                    <MdSupervisorAccount color="#fb923c" size="4em" className="text-center items-center"/>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex gap-8 h-[25rem] w-full pt-12">
                    <Card 
                        isBlurred
                        className="border-none bg-[#2c3033] dark:bg-default-100/50 w-1/3 py-4"
                    >       
                        <CardHeader className="text-center pb-0 pt-2 px-4 flex-col">
                            <h4 className="text-3xl text-white">GUSSAB</h4>
                        </CardHeader>  
                        <CardBody className="overflow-visible py-4 items-center">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="./src/images/vista-inicio/loguito.png"
                                width={140}
                            />
                        </CardBody>
                        <CardHeader className="text-center pb-2 pt-0 px-4 flex-col">
                            <p className="text-xl text-white">¡Donde el buen gusto se une al sabor!</p>
                        </CardHeader>
                    </Card>
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 w-2/3"
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
                                        right: 15,
                                        left: 25,
                                        bottom: 5,
                                    }}
                                // margin={{ top: 5, bottom: 5 }}
                                >
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="nombre" className="text-xs" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="cantidad" fill="#fb923c" />
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
                            <div className="text-center text-xl">Categorías más vendidas</div>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        dataKey="total_cantidad"
                                        // isAnimationActive={false}
                                        data={categorias}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={105}
                                        fill="#fb923c"
                                        // label
                                        onMouseEnter={onPieEnter}
                                    // nameKey="nombre_categoria"
                                    >
                                        {/* {
                                            categorias.map((categoria, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))
                                        } */}
                                    </Pie>
                                    {/* <Tooltip /> */}
                                </PieChart>
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
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="nombre" className="text-xs" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar dataKey="cantidad" fill="#fb923c" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default Dashboard