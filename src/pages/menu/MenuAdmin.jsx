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

export const MenuAdmin = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isUpdateModalOpen, onOpen: openUpdateModal, onClose: closeUpdateModal } = useDisclosure();
    const [nombre, setNombre] = useState('')
    const [desc, setDesc] = useState('')
    const [precio, setPrecio] = useState('')
    const [img, setImg] = useState('')
    const [cat, setCat] = useState('')
    //const {id_items} = useParams();

    const formData = new FormData();
    //formData.append('id', id);
    formData.append('nombre', nombre);
    formData.append('desc', desc);
    formData.append('precio', precio);
    formData.append('img', img);
    formData.append('cat', cat);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/items/crear', formData)
            .then(res => {
                console.log(res);
                window.location.reload()
            }).catch(err => console.log(err));
    }


    //ACTUALIZAR REGISTROS 
    const [registroActual, setRegistroActual] = useState(null);
    const [nombreActualizado, setNombreActualizado] = useState('');
    const [descActualizado, setDescActualizado] = useState('');
    const [precioActualizado, setPrecioActualizado] = useState('');
    const [imgActualizado, setImgActualizado] = useState('');
    const [catActualizado, setCatActualizado] = useState('');

    const updatedFormData = new FormData();

    updatedFormData.append('nombre', nombreActualizado);
    updatedFormData.append('desc', descActualizado);
    updatedFormData.append('precio', precioActualizado);
    //updatedFormData.append('img', img);
    updatedFormData.append('img', imgActualizado);
    updatedFormData.append('cat', catActualizado);

    const handleActualizarClick = (registro) => {
        setRegistroActual(registro);

        setNombreActualizado(registro.nombre);
        setDescActualizado(registro.descripcion);
        setPrecioActualizado(registro.precio);
        setImgActualizado(registro.imagen);
        setCatActualizado(registro.idcategoria);

        openUpdateModal();
    };


    function handleUpdate(event) {
        event.preventDefault();

        if (imgActualizado === registroActual.imagen) {
            updatedFormData.delete('img');
        }

        axios.put(`/api/items/actualizar/${registroActual.id_items}`, updatedFormData)
            .then(res => {
                window.location.reload()
                console.log(res);
            }).catch(err => console.log(err));
    }

    //ELIMINAR REGISTRO

    const handleDelete = async (registro) => {
        setRegistroActual(registro);

        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este registro?");

        if (confirmDelete) {
            try {
                await axios.delete(`/api/items/eliminar/${registro}`)
                window.location.reload()
            } catch (err) {
                console.log(err);
            }
        }
    }

    ////

    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get('/api/items')
            .then(res => setItem(res.data))
            .catch(err => console.log(err));
    }, [])

    const [itemCat, setItemCat] = useState([])
    useEffect(() => {
        axios.get('/api/items-categoria')
            .then(res => setItemCat(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="py-16 px-24 font-marcellus mb-40">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
            </div>
            <div>
                <>
                    <div className="mb-6">
                        <button className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-[#092A3A] text-white transition duration-500" onClick={onOpen}>Agregar producto</button>
                    </div>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">Agregar item</ModalHeader>

                                    <ModalBody className="mx-10">
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="Nombre"
                                                placeholder="Tacos de..."
                                                labelPlacement="outside"
                                                variant="bordered"
                                                onChange={e => setNombre(e.target.value)}
                                            />
                                            <Input
                                                label="Descripción"
                                                placeholder="Tortilla de maíz o..."
                                                labelPlacement="outside"
                                                variant="bordered"
                                                onChange={e => setDesc(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                                            <Input
                                                type="number"
                                                label="Precio"
                                                placeholder="0.00"
                                                labelPlacement="outside"
                                                variant="bordered"
                                                min="0"
                                                onChange={e => setPrecio(e.target.value)}
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-default-400 text-small">$</span>
                                                    </div>
                                                }
                                            />
                                            <div>
                                                <p className="font-semibold text-sm">Imagen del producto</p>
                                                <input type="file"
                                                    name="img"
                                                    className="mt-2 block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-[#cd9b4a] file:text-white
                                                        hover:file:bg-orange-200"
                                                    onChange={e => {
                                                        const file = e.target.files[0];
                                                        setImg(file);
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <Select
                                                    label="Selecciona una categoria"
                                                    className="max-w-xs"
                                                    onChange={e => setCat(parseInt(e.target.value) + 1)}
                                                >
                                                    {
                                                        itemCat.map((data, i) => (
                                                            <SelectItem key={i} value={data.idcategoria}>
                                                                {data.nombre_categoria}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </Select>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter className="mb-5 mx-10">
                                        <Button color="danger" variant="light" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" onPress={onClose}>
                                            Cancelar
                                        </Button>
                                        <Button color="primary" className="bg-[#092A3A] w-1/5 active:scale-95 hover:scale-105 shadow-xl transition duration-500" onClick={handleSubmit} onPress={onClose}>
                                            Agregar
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </>
            </div>

            <div className="mt-6">
                <Card className="h-auto shadow-none -mx-6">
                    <CardBody>
                        <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">
                            <TableHeader>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> NOMBRE </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> DESCRIPCIÓN </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> PRECIO </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> CATEGORÍA </TableColumn>
                                <TableColumn className="bg-[#092A3A] text-white font-medium text-center"> </TableColumn>
                            </TableHeader>
                            <TableBody emptyContent={"No rows to display."}>
                                {
                                    item.map((data, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="uppercase">{data.nombre}</TableCell>
                                            <TableCell className="">{data.descripcion}</TableCell>
                                            <TableCell className="text-center">{`$` + data.precio}</TableCell>
                                            <TableCell className="text-center">{data.nombre_categoria}</TableCell>
                                            <TableCell className="text-center w-12">
                                                <>
                                                    <div className="relative flex">
                                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleActualizarClick(data)}>
                                                            <EditIcon />
                                                        </span>
                                                        <span className="pl-2 text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(data.id_items)}>
                                                            <DeleteIcon />
                                                        </span>
                                                    </div>
                                                    <Modal
                                                        isOpen={isUpdateModalOpen}
                                                        onOpenChange={closeUpdateModal}
                                                        size="4xl"
                                                        backdrop="opaque"
                                                        classNames={{
                                                            backdrop: "bg-[#000000]/5 backdrop-opacity-40"
                                                        }}
                                                    >
                                                        <ModalContent>
                                                            {(onClose) => (
                                                                <>
                                                                    <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">Actualizar</ModalHeader>

                                                                    <ModalBody className="mx-10">
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <Input
                                                                                label="Actualizar nombre"
                                                                                placeholder="Tacos de..."
                                                                                labelPlacement="outside"
                                                                                variant="bordered"
                                                                                value={nombreActualizado}
                                                                                onChange={e => setNombreActualizado(e.target.value)}
                                                                            />
                                                                            <Input
                                                                                label="Actualizar descripción"
                                                                                placeholder="Tortilla de maíz o..."
                                                                                labelPlacement="outside"
                                                                                variant="bordered"
                                                                                value={descActualizado}
                                                                                onChange={e => setDescActualizado(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                                                                            <Input
                                                                                type="number"
                                                                                label="Actualizar precio"
                                                                                placeholder="0.00"
                                                                                labelPlacement="outside"
                                                                                variant="bordered"
                                                                                min="0"
                                                                                value={precioActualizado}
                                                                                onChange={e => setPrecioActualizado(e.target.value)}
                                                                                startContent={
                                                                                    <div className="pointer-events-none flex items-center">
                                                                                        <span className="text-default-400 text-small">$</span>
                                                                                    </div>
                                                                                }
                                                                            />
                                                                            <div>
                                                                                <p className="font-semibold text-sm">Actualizar imagen del producto</p>
                                                                                <input
                                                                                    type="file"
                                                                                    name="img"
                                                                                    className="mt-2 block w-full text-sm text-slate-500
                                                                                        file:mr-4 file:py-2 file:px-4
                                                                                        file:rounded-full file:border-0
                                                                                        file:text-sm file:font-semibold
                                                                                        file:bg-[#cd9b4a] file:text-white
                                                                                        hover:file:bg-orange-200"
                                                                                    onChange={e => {
                                                                                        const file = e.target.files[0];
                                                                                        setImgActualizado(file);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <Select
                                                                                    label="Actualizar categoria"
                                                                                    className="max-w-xs"
                                                                                    value={catActualizado}
                                                                                    onChange={e => setCatActualizado(parseInt(e.target.value) + 1)}
                                                                                >
                                                                                    {
                                                                                        itemCat.map((data, i) => (
                                                                                            <SelectItem key={i} value={data.idcategoria}>
                                                                                                {data.nombre_categoria}
                                                                                            </SelectItem>
                                                                                        ))
                                                                                    }
                                                                                </Select>
                                                                            </div>
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

        </div>
    )
}
export default MenuAdmin