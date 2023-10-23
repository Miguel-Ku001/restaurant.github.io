import { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, 
        Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const MenuAdmin = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [nombre, setNombre] = useState('')
    const [desc, setDesc] = useState('')
    const [precio, setPrecio] = useState('')
    const [img, setImg] = useState('')
    const [cat, setCat] = useState('')
    const navigate = useNavigate();

    const formData = new FormData();
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
            navigate('/menu/admin');
        }).catch(err => console.log(err));
    }


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
      <div className="py-16 px-24 font-marcellus mb-40 mt-10 mx-72">

            <div>
                <>
                <Button color="primary" variant="flat" className="text-white bg-[#cd9b4a]" onPress={onOpen}>Agregar</Button>
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

            <div className="mt-10">
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
                                    <TableCell>{data.nombre}</TableCell>
                                    <TableCell>{data.descripcion}</TableCell>
                                    <TableCell>{`$` + data.precio}</TableCell>
                                    <TableCell>{data.nombre_categoria}</TableCell>
                                    <TableCell className="grid grid-cols-2 gap-2">
                                        <Button size="sm" color="primary">
                                            Actualizar
                                        </Button>
                                        <Button size="sm" color="danger">
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