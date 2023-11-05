import { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export const TableroReservacion = () => {

    const [board, setBoard] = useState([])
    useEffect(() => {
        axios.get('/api/reservacion')
            .then(res => {
                // console.log(res.data);
                setBoard(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const idreservacion = result.draggableId;
        const sourceColumn = result.source.droppableId;
        const destinationColumn = result.destination.droppableId;
        let newObservation;

        if (destinationColumn === "en-espera") {
            newObservation = 1;
        } else if (destinationColumn === "en-seguimiento") {
            newObservation = 2;
        } else if (destinationColumn === "finalizado") {
            newObservation = 3;
        }

        // Actualiza la base de datos con el nuevo valor de observación
        axios.put(`/api/reservacion/actualizar/${idreservacion}`, { observacion: newObservation })
            .then(() => {
                // Actualiza la vista si es necesario
                // window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="py-16 px-24 font-marcellus">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800">RESERVACIONES</h2>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="w-full h-full gab-3 flex space-x-4 p-4">
                    <Droppable droppableId="en-espera">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex w-1/3 items-start justify-start h-full"
                            >
                                {board.map((data, i) => {
                                    if (data.observacion === 1) {
                                        return (
                                            <div key={i} className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">{/*id="todo-lane */}
                                                <h3 className="text-2xl text-center mb-2">EN ESPERA</h3>
                                                <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">{data.nombre}</p>
                                            </div>
                                        );
                                    }
                                })}
                                {provided.placeholder}
                            </div>
                            //     <div className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded w-1/3 min-h-225 shrink-0 ">
                            //     <h3 className="text-2xl text-center mb-2">EN SEGUIMIENTO</h3>

                            //     <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">Binge 80 hours of Game of Thrones</p>
                            // </div>

                            // <div className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded w-1/3 min-h-225 shrink-0 ">
                            //     <h3 className="text-2xl text-center mb-2">FINALIZADO</h3>

                            //     <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">
                            //         Watch video of a man raising a grocery store lobster as a pet
                            //     </p>
                            // </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="en-seguimiento">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex items-start justify-start h-full w-1/3"
                            >
                                {board.map((data, i) => {
                                    if (data.observacion === 2) {
                                        return (
                                            <div key={i} className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">
                                                <h3 className="text-2xl text-center mb-2">EN SEGUIMIENTO</h3>
                                                <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">{data.nombre}</p>
                                            </div>
                                        );
                                    }
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="finalizado">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex items-start justify-start h-full w-1/3"
                            >
                                {board.map((data, i) => {
                                    if (data.observacion === 3) {
                                        return (
                                            <div key={i} className="flex flex-col gap-3 bg-[#f4f4f4] shadow-sm p-12 rounded min-h-225 shrink-0 w-full">
                                                <h3 className="text-2xl text-center mb-2">FINALIZADO</h3>
                                                <p className="bg-white text-gary-900 shadown-sm p-8 rounded text-base cursor-move" draggable="true">
                                                    {data.nombre}
                                                </p>
                                            </div>
                                        );
                                    }
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </div>
            </DragDropContext>

        </div>
    );
};

export default TableroReservacion;