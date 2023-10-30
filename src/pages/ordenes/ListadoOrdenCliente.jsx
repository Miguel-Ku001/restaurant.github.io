import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Button,
    useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Divider
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const ListadoOrdenCliente = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function formatFecha(fecha) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(fecha).toLocaleDateString(undefined, options);
    }

    //recuperando el id del usuario desde el localStorage
    const idusuario = localStorage.getItem('idusuario');

    const [orden, setOrden] = useState([]);
    useEffect(() => {
        if (idusuario) {
            axios.get(`/api/ordenes/cliente?idusuario=${idusuario}`)
                .then(res => {
                    // console.log(res.data);
                    setOrden(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [idusuario]);
    //Fin recuperando el id del usuario desde el localStorage

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


    return (

        <div className="py-16 px-24 font-marcellus">
            {
                orden.map((data, i) => (
                    <div key={i}>
                        <div className="mb-10">
                            <h2 className="text-5xl text-center text-gray-800">Hola, {data.nombre_usuario} {data.apellidos_usuario}</h2>
                        </div>
                        <div className="mb-10">
                            <h3 className="text-2xl text-center text-gray-800">TUS ORDENES REALIZADAS</h3>
                        </div>
                    </div>
                ))
            }

            <div>
                <Card className="h-auto shadow-none">
                    <CardBody>
                        <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">{/*bg-gray-200*/}
                            <TableHeader>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> NÚMERO DE ORDEN </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> FECHA </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> COSTO TOTAL </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center">  </TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    orden.map((data, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="text-center"> {data.num_orden} </TableCell>
                                            <TableCell className="text-center"> {formatFecha(data.fecha)} </TableCell>
                                            <TableCell className="text-center"> ${data.costo_final} </TableCell>
                                            <TableCell>
                                                <>
                                                    <div className="text-center">
                                                        <Button
                                                            color="primary"
                                                            className="bg-[#cd9b4a] w-1/5 active:scale-95 hover:scale-105 shadow-xl transition duration-500"
                                                            onPress={() => {
                                                                setSelectedOrdenDetalles(data.num_orden);
                                                                onOpen();
                                                            }}
                                                        >
                                                            Detalles
                                                        </Button>
                                                    </div>

                                                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                                                        <ModalContent>
                                                            {(onClose) => (
                                                                <>
                                                                    <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">DETALLES DE ORDEN</ModalHeader>

                                                                    <ModalBody className="mx-10">
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            {ordenDetalles.map((detail, index) => (
                                                                                <div key={index}>
                                                                                    <div className="space-y-1">
                                                                                        <h4 className="text-medium font-medium">{detail.nombre}</h4>
                                                                                    </div>
                                                                                    <Divider className="my-2 w-1/2" />
                                                                                    <div className="space-y-1">
                                                                                        <p className="text-small text-default-400">Precio: ${detail.precio}</p>
                                                                                        <p className="text-small text-default-400">Cantidad: {detail.cantidad}</p>
                                                                                    </div>
                                                                                    <Divider className="my-2 w-1/2" />
                                                                                    <div className="space-y-1">
                                                                                        <p className="text-small text-default-400">Costo total: ${detail.costo_total}</p>
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
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
export default ListadoOrdenCliente