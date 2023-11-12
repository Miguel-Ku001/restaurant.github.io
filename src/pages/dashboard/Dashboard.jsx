import React, { PureComponent, useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie
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
          {payload.name}
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
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };


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