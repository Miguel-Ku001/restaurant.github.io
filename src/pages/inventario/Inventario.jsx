import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, 
  Select, SelectItem} from "@nextui-org/react";
import { useEffect, useState } from "react";
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

export const Inventario = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const { isOpen: isUpdateModalOpen, onOpen: openUpdateModal, onClose: closeUpdateModal } = useDisclosure();    
const [nomprod, setNomprod] = useState('')
const [code, setCode] = useState('')
const [familia, setFamilia] = useState('')
const [unidad, setUnidad] = useState('')
const [cantidad, setCantidad] = useState('')
const [costo, setCosto] = useState('')
const [total, setTotal] = useState('')
const [proveedor, setProveedor] = useState('')
const [sucursal, setSucursal] = useState('')

const formData = new FormData();
formData.append('nomprod', nomprod);
formData.append('code', code);
formData.append('familia', familia);
formData.append('unidad', unidad);
formData.append('cantidad', cantidad);
formData.append('costo', costo);
formData.append('total', total);
formData.append('proveedor', proveedor);
formData.append('sucursal', sucursal);


function handleSubmit(event) {
  event.preventDefault();
  axios.post('/api/producto/crear', formData)
  .then(res => {
      console.log(res);
      window.location.reload()
  }).catch(err => console.log(err));
}


  const [prod, setProd] = useState([])
      useEffect(()=> {
          axios.get('/api/productos')
          .then(res => setProd(res.data))
          .catch(err => console.log(err));
      }, [])

  const [prodSuc, setProdSuc] = useState([])
  useEffect(()=> {
      axios.get('/api/sucursal-producto')
      .then(res => setProdSuc(res.data))
      .catch(err => console.log(err));
  }, [])

  const [prodProv, setProdProv] = useState([])
  useEffect(()=> {
      axios.get('/api/proveedor-producto')
      .then(res => setProdProv(res.data))
      .catch(err => console.log(err));
  }, [])


    return (

        <div className="py-16 px-24 font-marcellus">
          <div className="mb-10">
            <h2 className="text-5xl text-center text-gray-800">INVENTARIO</h2>
          </div>
        
          <form>   
            <div className="w-1/2">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white font-medium border border-gray-300 rounded-lg bg-[#cd9b4a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white" placeholder="Buscar producto por sucursal, código o nombre" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#092A3A] hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </div>  
          </form>

          <div>
            <>
              <div className="mb-6">
                <button href="#" className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-[#092A3A] text-white transition duration-500">Agregar producto</button>
              </div>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
                        <ModalContent>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">Agregar producto</ModalHeader>

                            <ModalBody className="mx-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Nombre"
                                        placeholder="Tacos de..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setNomprod(e.target.value)}
                                    />
                                    <Input
                                        label="Codigo"
                                        placeholder="Tortilla de maíz o..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setCode(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Familia"
                                        placeholder="Tacos de..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setFamilia(e.target.value)}
                                    />
                                    <Input
                                        label="Unidad"
                                        placeholder="Tortilla de maíz o..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setUnidad(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Cantidad"
                                        placeholder="Tacos de..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setCantidad(e.target.value)}
                                    />
                                    <Input
                                        type="number"
                                        label="Costo"
                                        placeholder="0.00"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        min="0" 
                                        onChange={e => setCosto(e.target.value)}
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">$</span>
                                            </div>
                                        }
                                    />
                                </div>
                                <div>
                                    <Input
                                        label="Total"
                                        placeholder="Tacos de..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        onChange={e => setTotal(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Select 
                                        label="Selecciona un proveedor" 
                                        className="max-w-xs" 
                                        onChange={e => setProveedor(parseInt(e.target.value) + 1)}
                                    >
                                        {
                                            prodProv.map((data, i)=> (
                                                <SelectItem key={i} value={data.idproveedor}>
                                                    {data.nombre}
                                                </SelectItem>
                                            ))
                                        }
                                    </Select>
                                    <Select 
                                        label="Selecciona una sucursal" 
                                        className="max-w-xs" 
                                        onChange={e => setSucursal(parseInt(e.target.value) + 1)}
                                    >
                                        {
                                            prodSuc.map((data, i)=> (
                                                <SelectItem key={i} value={data.idsucursal}>
                                                    {data.nombre}
                                                </SelectItem>
                                            ))
                                        }
                                    </Select>
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
          


          <div>
            <Card className="h-auto shadow-none -mx-6">
              <CardBody className="">
                <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">{/*bg-gray-200*/}
                  <TableHeader>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">PROVEEDOR</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">SUCURSAL</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">CODIGO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">FAMILIA</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">PRODUCTO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">UNIDAD</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">CANTIDAD</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">COSTO UNITARIO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">COSTO TOTAL</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium"></TableColumn>
                    
                  </TableHeader>
                  <TableBody emptyContent={"No rows to display."}>
                  {
                    prod.map((data, i)=> (
                    <TableRow key={i}>
                      <TableCell>{data.idproveedor}</TableCell>
                      <TableCell>{data.idsucursal}</TableCell>
                      <TableCell>{data.codigo}</TableCell>
                      <TableCell>{data.familia}</TableCell>
                      <TableCell>{data.nombre}</TableCell>
                      <TableCell>{data.unidad}</TableCell>
                      <TableCell>{data.cantidad}</TableCell>
                      <TableCell>{`$` + data.costo_unitario}</TableCell>
                      <TableCell>{`$` + data.costo_total}</TableCell>
                      <TableCell className="w-12">
                        <div className="relative flex">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EditIcon />
                            </span>
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                              <DeleteIcon />
                            </span>
                        </div>
                      </TableCell>
                    </TableRow>
                     ))}
                  </TableBody>
                </Table>
                
              </CardBody>
            </Card>
          </div>


          







        </div>

    )
  }
  export default Inventario