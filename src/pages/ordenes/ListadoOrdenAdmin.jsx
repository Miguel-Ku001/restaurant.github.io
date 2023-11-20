import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Button,
    useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Divider
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const ListadoOrdenAdmin = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const {onClose: closeUpdateModal } = useDisclosure();



    function formatFecha(fecha) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(fecha).toLocaleDateString(undefined, options);
    }

    const [orden, setOrden] = useState([])
    useEffect(() => {
        axios.get('/api/ordenes/admin')
            .then(res => {
                // console.log(res.data);
                setOrden(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const [venta, setVenta] = useState([])
    useEffect(() => {
        axios.get('/api/ventas/items')
            .then(res => setVenta(res.data))
            .catch(err => console.log(err));
    }, [])

    const [selectedOrdenDetalles, setSelectedOrdenDetalles] = useState(null);
    const [ordenDetalles, setOrdenDetalles] = useState([]);

    useEffect(() => {
        if (selectedOrdenDetalles !== null) {
            axios.get(`/api/ventas/items?num_orden=${selectedOrdenDetalles}`)
                .then(res => {
                    setOrdenDetalles(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [selectedOrdenDetalles]);

    const handleStateChange = (id_orden, newState) => {

        const confirmFinalizar = window.confirm("¿Estás seguro de que deseas finalizar esta orden?");
        
        if (confirmFinalizar) {
            try {
                axios.put(`/api/estatus/orden/actualizar/${id_orden}`, { estatus: newState }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(() => {
                        axios.get('/api/ordenes/admin')
                            .then(res => {
                                // console.log(res.data);
                                setOrden(res.data);
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
            } catch (err) {
                console.log(err);
            }
        }

        
            // .catch(err => console.log(err));
    };


    return (

        <div className="py-16 px-24 font-marcellus">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800">ORDENES REALIZADAS</h2>
            </div>

            <div>
                <Card className="h-auto shadow-none">
                    <CardBody>
                        <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">{/*bg-gray-200*/}
                            <TableHeader>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> NOMBRE DEL CLIENTE </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> NÚMERO DE ORDEN </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> FECHA </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> COSTO TOTAL </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center">  </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center">  </TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    orden
                                        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                                        .map((data, i) => {
                                            if (data.estatus === 1) {
                                                return (
                                                    <TableRow key={i}>
                                                        <TableCell className="text-center"> {data.nombre} {data.apellidos} </TableCell>
                                                        <TableCell className="text-center"> {data.num_orden} </TableCell>
                                                        <TableCell className="text-center"> {formatFecha(data.fecha)} </TableCell>
                                                        <TableCell className="text-center"> ${data.costo_final} </TableCell>
                                                        <TableCell className="w-14">
                                                            <>
                                                                <div className="text-center">
                                                                    <Button
                                                                        color="primary"
                                                                        className="bg-[#fdba74] w-full active:scale-95 hover:scale-105 transition duration-500"
                                                                        onPress={() => {
                                                                            setSelectedOrdenDetalles(data.num_orden);
                                                                            onOpen();
                                                                        }}
                                                                    >
                                                                        Ver detalles
                                                                    </Button>
                                                                </div>

                                                                <Modal
                                                                    isOpen={isOpen}
                                                                    onOpenChange={onOpenChange}
                                                                    size="4xl"
                                                                    backdrop="opaque"
                                                                    classNames={{
                                                                        backdrop: "bg-[#000000]/10 backdrop-opacity-40"
                                                                    }}
                                                                >
                                                                    <ModalContent>
                                                                        {(onClose) => (
                                                                            <>
                                                                                <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">DETALLES DE ORDEN</ModalHeader>

                                                                                <ModalBody className="mx-20">
                                                                                    <div className="grid grid-cols-2 gap-4">
                                                                                        {ordenDetalles.map((detail, index) => (
                                                                                            <div key={index}>
                                                                                                <div className="space-y-1">
                                                                                                    <h4 className="text-medium font-medium">{detail.nombre}</h4>
                                                                                                </div>
                                                                                                <Divider className="my-2 w-3/4" />
                                                                                                <div className="space-y-1">
                                                                                                    <p className="text-small text-default-900 ml-4">Precio: ${detail.precio}</p>
                                                                                                    <p className="text-small text-default-900 ml-4">Cantidad: {detail.cantidad}</p>
                                                                                                </div>
                                                                                                <Divider className="my-2 w-3/4" />
                                                                                                <div className="space-y-1">
                                                                                                    <p className="text-small text-default-900 ml-4 pb-5">Costo total: ${detail.costo_total}</p>
                                                                                                </div>
                                                                                            </div>

                                                                                        ))}
                                                                                    </div>
                                                                                </ModalBody>

                                                                                <ModalFooter className="mb-5 mx-10">
                                                                                    <Button color="danger" variant="light" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" onPress={onClose}>
                                                                                        Cerrar
                                                                                    </Button>
                                                                                </ModalFooter>
                                                                            </>
                                                                        )}
                                                                    </ModalContent>
                                                                </Modal>
                                                            </>
                                                        </TableCell>
                                                        <TableCell className="text-center w-14">
                                                            <Button
                                                                variant="bordered"
                                                                className="text-orange-500 border-orange-400 w-full active:scale-95 hover:scale-105 transition duration-500"
                                                                onClick={() => handleStateChange(data.id_orden, 2)}
                                                            >
                                                                Finalizar orden
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        })
                                }
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
export default ListadoOrdenAdmin