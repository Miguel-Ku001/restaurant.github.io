import { useEffect, useState } from "react";
import {
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem,
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody
} from "@nextui-org/react";
import axios from "axios";

const EditIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M2.5 18.3333H17.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
    </svg>
);

const DeleteIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M8.60834 13.75H11.3833"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.91669 10.4167H12.0834"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);




export const UsuariosListado = () => {
    //ABRIR MODAL
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    //RECUPERAR REGISTROS USUARIOS
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        axios.get('/api/usuarios')
            .then(res => setUsuarios(res.data))
            .catch(err => console.log(err));
    }, [])

    const [buscarUser, setBuscarUser] = useState('');
    const filteredUsers = usuarios.filter((product) => {
        const buscarUsers = `${product.email}`.toLowerCase();
        return buscarUsers.includes(buscarUser.toLowerCase());
      });

    //RECUPERAR ROLES
    const [rol, setRol] = useState([])
    useEffect(() => {
        axios.get('/api/rol')
            .then(res => setRol(res.data))
            .catch(err => console.log(err));
    }, [])


    //ACTUALIZAR ROL
    const [registroActual, setRegistroActual] = useState(null);
    const [nombreActual, setNombreActual] = useState('');
    const [apellidoActual, setApellidoActual] = useState('');
    const [emailActual, setEmailActual] = useState('');
    const [rolActualizado, setRolActualizado] = useState('');


    const handleActualizarClick = (registro) => {
        setRegistroActual(registro);
        setRolActualizado(registro.idrol);

        setNombreActual(registro.usuario_nombre)
        setApellidoActual(registro.apellidos)
        setEmailActual(registro.email)
        onOpen();
    };

    function handleUpdate(event) {
        event.preventDefault();
        const nuevoRol = {idrol: rolActualizado};
        axios.put(`/api/rol-usuario/actualizar/${registroActual.idusuario}`, nuevoRol)
        .then(res => {
            window.location.reload()
            console.log(res);
        }).catch(err => console.log(err));
    }


    //ELIMINAR USUARIO

    const handleDelete = async (registro) => {
        setRegistroActual(registro);

        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");

        if (confirmDelete) {
            try {
                await axios.delete(`/api/usuario/eliminar/${registro}`)
                window.location.reload()
            } catch (err) {
                console.log(err);
            }
        }
    }

    ////

    return (
        <div className="py-16 px-24 font-marcellus mb-10 h-screen">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800 font-medium">USUARIOS</h2>
            </div>
            <div className="flex justify-end">
                <div className="w-1/4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 font-medium border border-[#092A3A] border-2 rounded-lg focus:ring-blue-500 focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-900"
                            placeholder="Buscar por email"
                            required
                            value={buscarUser}
                            onChange={(e) => setBuscarUser(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <Card className="h-auto shadow-none -mx-6">
                <CardBody>
                    <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">
                        <TableHeader>
                            <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> NOMBRE </TableColumn>
                            <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> APELLIDOS </TableColumn>
                            <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> EMAIL </TableColumn>
                            <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> ROL </TableColumn>
                            <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> </TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"No rows to display."}>
                            {
                                filteredUsers.map((data, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{data.usuario_nombre}</TableCell>
                                        <TableCell>{data.apellidos}</TableCell>
                                        <TableCell className="text-center">{data.email}</TableCell>
                                        <TableCell className="text-center uppercase">{data.rol_nombre}</TableCell>
                                        <TableCell className="text-center w-12">
                                        <div className="relative flex">
                                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleActualizarClick(data)}>
                                                <EditIcon />
                                            </span>
                                            <span className="pl-2 text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(data.idusuario)}>
                                                <DeleteIcon />
                                            </span>
                                        </div>
                                        <>
                                        <Modal
                                            isOpen={isOpen}
                                            onOpenChange={onOpenChange}
                                            size="4xl"
                                            backdrop="opaque"
                                            classNames={{
                                                backdrop: "bg-[#000000]/5 backdrop-opacity-40"
                                            }}
                                        >
                                            <ModalContent>
                                                {(onClose) => (
                                                    <>
                                                        <ModalHeader className="flex flex-col gap-1 my-5 mx-10">CAMBIAR ROL</ModalHeader>

                                                        <ModalBody className="mx-10">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <Input
                                                                    label="Nombre"
                                                                    isDisabled
                                                                    labelPlacement="outside"
                                                                    variant="bordered"
                                                                    value={nombreActual}
                                                                />
                                                                <Input
                                                                    label="Apellidos"
                                                                    isDisabled
                                                                    labelPlacement="outside"
                                                                    variant="bordered"
                                                                    value={apellidoActual}
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4 mt-10">
                                                                <Input
                                                                    label="Email"
                                                                    isDisabled
                                                                    labelPlacement="outside"
                                                                    variant="bordered"
                                                                    value={emailActual}
                                                                />
                                                                <Select
                                                                    label="Actualizar rol"
                                                                    className="max-w-xs"
                                                                    value={rolActualizado}
                                                                    onChange={e => setRolActualizado(parseInt(e.target.value) + 1)}
                                                                >
                                                                    {
                                                                        rol.map((data, i) => (
                                                                            <SelectItem key={i} value={data.idrol} className="uppercase">
                                                                                {data.nombre}
                                                                            </SelectItem>
                                                                        ))
                                                                    }
                                                                </Select>
                                                            </div>
                                                        </ModalBody>
                                                        <ModalFooter className="mb-5 mx-10">
                                                            <Button color="danger" variant="light" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" onPress={onClose}>
                                                                Cancelar
                                                            </Button>
                                                            <Button color="primary" className="bg-[#092A3A] w-1/5 active:scale-95 hover:scale-105 shadow-xl transition duration-500" onClick={handleUpdate} onPress={onClose}>
                                                                Actualizar
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
    )
}
export default UsuariosListado