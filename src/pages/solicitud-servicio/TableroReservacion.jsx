import React, { useEffect, useState } from "react";
import axios from "axios";
import { Popover, PopoverTrigger, PopoverContent, Button, useDisclosure } from "@nextui-org/react";
import { MdArrowCircleLeft, MdArrowCircleRight, MdOutlineMoreHoriz } from "react-icons/md";

export const TableroReservacion = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function formatFecha(fecha) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(fecha).toLocaleDateString(undefined, options);
    }

    const [enespera, setEnEspera] = useState([])
    const [board, setBoard] = useState([])
    useEffect(() => {
        axios.get('/api/reservacion')
            .then(res => {
                // console.log(res.data);
                setBoard(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleStateChange = (idreservacion, newState) => {
        axios.put(`/api/reservacion/actualizar/${idreservacion}`, { observacion: newState }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                axios.get('/api/reservacion')
                    .then(res => {
                        // console.log(res.data);
                        setBoard(res.data);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="py-16 px-24 font-marcellus">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800">RESERVACIONES</h2>
            </div>

            <div className="w-full h-full gab-3 flex space-x-4 p-4">
                <div className="flex w-1/3 items-start justify-start h-full">
                    <div className="bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">
                        <h3 className="text-2xl text-center mb-2 pb-8">EN ESPERA</h3>
                        {board
                            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                            .map((data, i) => {
                                if (data.observacion === 1) {
                                    return (
                                        <div key={i} className="pb-8">
                                            <div>
                                                <p className="bg-white text-gary-900 shadow-sm p-8 rounded text-small" draggable="true">
                                                    <b className="text-gray-600">Solicitante: </b>{data.nombre}
                                                    <br />
                                                    <b className="text-gray-600">Tipo de servicio: </b>{data.tipo_servicio}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between pt-2">
                                                <div className="flex-shrink-0" >
                                                    <MdArrowCircleLeft color="#cd9b4a" size="2em" className="justify-start" style={{ display: 'none' }} />
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Popover placement="right" className="text-center">
                                                        <PopoverTrigger>
                                                            <Button
                                                                color="primary"
                                                                className="justify-center bg-transparent w-1/5 active:scale-95 hover:scale-105 transition duration-500"
                                                                onPress={() => {
                                                                    data.idreservacion;
                                                                    onOpen();
                                                                }}
                                                            >
                                                                <MdOutlineMoreHoriz color="#cd9b4a" size="2em" />
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-96">
                                                            <div className="px-1 py-2 text-left">
                                                                <div className="text-xl font-bold text-center pb-2 text-gray-600">{data.nombre}</div>
                                                                <div className=" font-bold text-gray-600">Información de Contacto</div>
                                                                <div className="text-sm">Correo: {data.email}</div>
                                                                <div className="text-sm">Teléfono: {data.telefono}</div>
                                                                <div className="pt-2 font-bold text-gray-600">Información del servicio</div>
                                                                <div className="text-sm">Servicio: {data.tipo_servicio}</div>
                                                                <div className="text-sm">El día: {formatFecha(data.fecha)}</div>
                                                                <div className="text-sm">A las: {data.hora} hrs.</div>
                                                                <div className="text-sm">Para: {data.cantidad_invitados} personas</div>
                                                                <div className="pt-2 font-bold text-gray-600">Especificaciones</div>
                                                                <div className="text-sm">{data.especificaciones}</div>
                                                            </div>
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <MdArrowCircleRight color="#cd9b4a" size="2em" onClick={() => handleStateChange(data.idreservacion, 2)} className="active:scale-95 hover:scale-105 transition duration-500 cursor-pointer " />
                                                </div>

                                            </div>

                                            {/* <div className="flex columns-3">
                                                <MdArrowCircleLeft color="#cd9b4a" size="2em" />
                                                <MdArrowCircleRight color="#cd9b4a" size="2em" onClick={() => handleStateChange(data.idreservacion, 2)} className="active:scale-95 hover:scale-105 shadow-xl transition duration-500 cursor-pointer justify-end" />
                                            </div> */}

                                            {/* <button onClick={() => handleStateChange(data.idreservacion, 2)}>Seguimiento</button>
                                            <button onClick={() => handleStateChange(data.idreservacion, 3)}>Finalizado</button> */}
                                        </div>
                                    );
                                }
                            })}
                    </div>
                </div>
                <div className="flex items-start justify-start h-full w-1/3">
                    <div className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">
                        <h3 className="text-2xl text-center mb-2">EN SEGUIMIENTO</h3>
                        {board.map((data, i) => {
                            if (data.observacion === 2) {
                                return (
                                    <div key={i}>
                                        <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">{data.nombre}</p>
                                        <button onClick={() => handleStateChange(data.idreservacion, 1)}>En Espera</button>
                                        <button onClick={() => handleStateChange(data.idreservacion, 3)}>Finalizado</button>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="flex items-start justify-start h-full w-1/3">
                    <div className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">
                        <h3 className="text-2xl text-center mb-2">FINALIZADO</h3>
                        {board.map((data, i) => {
                            if (data.observacion === 3) {
                                return (
                                    <div key={i}>
                                        <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">
                                            {data.nombre}
                                        </p>
                                        <button onClick={() => handleStateChange(data.idreservacion, 1)}>Espera</button>
                                        <button onClick={() => handleStateChange(data.idreservacion, 2)}>Seguimiento</button>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TableroReservacion;