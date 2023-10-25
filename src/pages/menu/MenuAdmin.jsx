import { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, 
        Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import axios from "axios";

export const MenuAdmin = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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

        if(confirmDelete) {
            try {
                await axios.delete(`/api/items/eliminar/${registro}`)
                window.location.reload()
            }catch(err) {
                console.log(err);
            }
        }
    }

    ////

    const [item, setItem] = useState([])
    useEffect(()=> {
        axios.get('/api/items')
        .then(res => setItem(res.data))
        .catch(err => console.log(err));
    }, [])

    const [itemCat, setItemCat] = useState([])
    useEffect(()=> {
        axios.get('/api/items-categoria')
        .then(res => setItemCat(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
      <div className="py-16 px-24 font-marcellus mb-40 mx-60">
            <div className="mb-10">
                <h2 className="text-5xl text-center text-gray-800 font-medium">EDICION DEL MENÚ</h2>
            </div>
            <div>
                <>
                    <div className="flex justify-center">
                        <Button color="primary" variant="flat" className="mx-auto w-40 text-white bg-[#cd9b4a]" onPress={onOpen}>Agregar producto</Button>
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
                                        <input type="file" name="img" className="mt-2 block w-full text-sm text-slate-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-amber-500 file:text-white
                                            hover:file:bg-amber-600"
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
                                            itemCat.map((data, i)=> (
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
                                <Button color="danger" variant="light" onPress={onClose}>
                                Cancelar
                                </Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
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
                <Table isStriped aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Descripcion</TableColumn>
                        <TableColumn>Precio</TableColumn>
                        <TableColumn>Categoria</TableColumn>
                        <TableColumn></TableColumn>
                    </TableHeader>
                    <TableBody emptyContent={"No rows to display."}>
                        {
                            item.map((data, i)=> (
                                <TableRow key={i}>
                                    <TableCell className="uppercase">{data.nombre}</TableCell>
                                    <TableCell>{data.descripcion}</TableCell>
                                    <TableCell>{`$` + data.precio}</TableCell>
                                    <TableCell>{data.nombre_categoria}</TableCell>
                                    <TableCell className="grid grid-cols-2 gap-2">
                                        <>
                                            <Button size="sm" color="primary" onClick={() => handleActualizarClick(data)}>Actualizar</Button>
                                            <Modal isOpen={isUpdateModalOpen} onOpenChange={closeUpdateModal} size="4xl">
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
                                                                <input type="file" name="img" className="mt-2 block w-full text-sm text-slate-500
                                                                    file:mr-4 file:py-2 file:px-4
                                                                    file:rounded-full file:border-0
                                                                    file:text-sm file:font-semibold
                                                                    file:bg-amber-500 file:text-white
                                                                    hover:file:bg-amber-600"
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
                                                                    itemCat.map((data, i)=> (
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
                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                        Cancelar
                                                        </Button>
                                                        <Button color="primary" onClick={handleUpdate} onPress={onClose}>
                                                        Actualizar
                                                        </Button>
                                                    </ModalFooter>
                                                    </>
                                                )}
                                                </ModalContent>
                                            </Modal>
                                        </>
                                        <Button size="sm" color="danger" onClick={() => handleDelete(data.id_items)}>
                                            Eliminar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

      </div>
    )
  }
  export default MenuAdmin