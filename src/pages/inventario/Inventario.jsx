import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, Modal,
  ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select,
  SelectItem, Link
} from "@nextui-org/react";
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isUpdateModalOpen, onOpen: openUpdateModal, onClose: closeUpdateModal } = useDisclosure();
  const [buscarTerm, setBuscarTerm] = useState('');

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

  // Para calcular el total conforme a la contidad y el costo unitario
  const handleCantidadChange = (e) => {
    const newCantidad = parseFloat(e.target.value);
    if (!isNaN(newCantidad)) {
      setCantidad(newCantidad);
      // Calcula el nuevo costo total basado en la cantidad y el costo unitario
      const newTotal = newCantidad * costo;
      setTotal(newTotal);
    } else {
      setCantidad('');
      setTotal('');
    }
  };

  const handleCostoUnitarioChange = (e) => {
    const newCostoUnitario = parseFloat(e.target.value);
    if (!isNaN(newCostoUnitario)) {
      setCosto(newCostoUnitario);
      // Calcular el nuevo costo total basado en la cantidad y el costo unitario
      const newTotal = cantidad * newCostoUnitario;
      setTotal(newTotal);
    } else {
      setCosto('');
      setTotal('');
    }
  };
  // Para calcular el total conforme a la contidad y el costo unitario


  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/producto/crear', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        window.location.reload()
      }).catch(err => console.log(err));
  }


  //---------------Actualizar Registros------------------//
  const [registroActual, setRegistroActual] = useState(null);
  const [nomprodActualizado, setNomprodActualizado] = useState('');
  const [codeActualizado, setCodeActualizado] = useState('');
  const [familiaActualizado, setFamiliaActualizado] = useState('');
  const [unidadActualizado, setUnidadActualizado] = useState('');
  const [cantidadActualizado, setCantidadActualizado] = useState('');
  const [costoActualizado, setCostoActualizado] = useState('');
  const [totalActualizado, setTotalActualizado] = useState('');
  const [proveedorActualizado, setProveedorActualizado] = useState('');
  const [sucursalActualizado, setSucursalActualizado] = useState('');

  const updatedFormData = new FormData();
  updatedFormData.append('nomprod', nomprodActualizado);
  updatedFormData.append('code', codeActualizado);
  updatedFormData.append('familia', familiaActualizado);
  updatedFormData.append('unidad', unidadActualizado);
  updatedFormData.append('cantidad', cantidadActualizado);
  updatedFormData.append('costo', costoActualizado);
  updatedFormData.append('total', totalActualizado);
  updatedFormData.append('proveedor', proveedorActualizado);
  updatedFormData.append('sucursal', sucursalActualizado);

  const handleActualizarClick = (registro) => {
    setRegistroActual(registro);
    setNomprodActualizado(registro.nombre);
    setCodeActualizado(registro.codigo);
    setFamiliaActualizado(registro.familia);
    setUnidadActualizado(registro.unidad);
    setCantidadActualizado(registro.cantidad);
    setCostoActualizado(registro.costo_unitario);
    setTotalActualizado(registro.costo_total);
    setProveedorActualizado(registro.idproveedor);
    setSucursalActualizado(registro.idsucursal);

    openUpdateModal();
  };

  ////cambiosssssssssssss
  const handleCantidadActu = (e) => {
    const newCantidad = parseFloat(e.target.value);
    if (!isNaN(newCantidad)) {
      setCantidadActualizado(newCantidad);
      // Calcula el nuevo costo total basado en la cantidad y el costo unitario
      const newTotal = newCantidad * costoActualizado;
      setTotalActualizado(newTotal);
    } else {
      setCantidadActualizado('');
      setTotalActualizado('');
    }
  };

  const handleCostoUnitarioActu = (e) => {
    const newCostoUnitario = parseFloat(e.target.value);
    if (!isNaN(newCostoUnitario)) {
      setCostoActualizado(newCostoUnitario);
      // Calcular el nuevo costo total basado en la cantidad y el costo unitario
      const newTotal = cantidadActualizado * newCostoUnitario;
      setTotalActualizado(newTotal);
    } else {
      setCostoActualizado('');
      setTotalActualizado('');
    }
  };
  /////////




  function handleUpdate(event) {
    event.preventDefault();


    axios.put(`/api/productos/actualizar/${registroActual.idproducto}`, updatedFormData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        window.location.reload()
        console.log(res);
      }).catch(err => console.log(err));
  }
  //--------------Final actualizar Registros------------------//



  //--------------Eliminar Registros------------------//
  const handleDelete = async (registro) => {
    setRegistroActual(registro);

    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        await axios.delete(`/api/productos/eliminar/${registro}`)
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    }
  }
  //--------------Final eliminar Registros------------------//


  const [prod, setProd] = useState([])
  useEffect(() => {
    axios.get('/api/productos')
      .then(res => {
        // console.log(res.data);
        setProd(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const [prodSuc, setProdSuc] = useState([])
  useEffect(() => {
    axios.get('/api/sucursal-producto')
      .then(res => setProdSuc(res.data))
      .catch(err => console.log(err));
  }, [])

  const [prodProv, setProdProv] = useState([])
  useEffect(() => {
    axios.get('/api/proveedor-producto')
      .then(res => setProdProv(res.data))
      .catch(err => console.log(err));
  }, [])

  //buscador
  const filteredProducts = prod.filter((product) => {
    const buscarTerms = `${product.nombre_proveedor} ${product.nombre_sucursal} ${product.nombre} ${product.codigo}`.toLowerCase();
    return buscarTerms.includes(buscarTerm.toLowerCase());
  });
  //buscador

  return (

    <div className="py-16 px-24 font-marcellus">
      <div className="mb-10">
        <h2 className="text-5xl text-center text-gray-800">INVENTARIO</h2>
      </div>

      <form className="columns-2 pb-4">
        <div className="">
          <button className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-[#092A3A] text-white transition duration-500"
            onClick={onOpen}>
            Agregar producto
          </button>
        </div>
        <div className="flex justify-end">
          <div className="w-3/4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                variant="bordered"
                className="block w-full p-4 pl-10 text-sm text-gray-900 font-medium border-[#092A3A] border-2 rounded-lg focus:ring-blue-500 focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-900"
                placeholder="Buscar por proveedor, sucursal, código o nombre"
                required
                value={buscarTerm}
                onChange={(e) => setBuscarTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
      </form>

      <div>
        <>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="4xl"
            backdrop="opaque"
            classNames={{
              backdrop: "bg-[#000000]/50 backdrop-opacity-40"
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 mt-5 mx-10 text-2xl">Agregar producto</ModalHeader>
                  <ModalBody className="mx-10">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Nombre"
                        placeholder="Nombre del producto..."
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setNomprod(e.target.value)}
                      />
                      <Input
                        label="Código"
                        placeholder="Código de producto"
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setCode(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Familia"
                        placeholder="Carnes, Verduras, Lácteos..."
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setFamilia(e.target.value)}
                      />
                      <Input
                        label="Unidad"
                        placeholder="Kg, L, Pza..."
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setUnidad(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="number"
                        label="Cantidad"
                        placeholder="Escribe la cantidad"
                        labelPlacement="outside"
                        variant="bordered"
                        min="1"
                        onChange={(e) => handleCantidadChange(e)}
                      // onChange={e => setCantidad(e.target.value)}
                      />
                      <Input
                        type="number"
                        label="Costo unitario"
                        placeholder="0.00"
                        labelPlacement="outside"
                        variant="bordered"
                        min="0"
                        onChange={(e) => handleCostoUnitarioChange(e)}
                        // onChange={e => setCosto(e.target.value)}
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                          </div>
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        disabled
                        label="Costo total"
                        placeholder="0.00"
                        labelPlacement="outside"
                        variant="bordered"
                        className="w-1/2"
                        min="0"
                        value={isNaN(total) ? '' : total}
                        onChange={(e) => setTotal(parseFloat(e.target.value))}
                        // onChange={e => setTotal(e.target.value)}
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                          </div>
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Select
                        label="Selecciona un proveedor"
                        className="max-w-xs"
                        onChange={e => setProveedor(parseInt(e.target.value) + 1)}
                      >
                        {
                          prodProv.map((data, i) => (
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
                          prodSuc.map((data, i) => (
                            <SelectItem key={i} value={data.idsucursal}>
                              {data.nombre}
                            </SelectItem>
                          ))
                        }
                      </Select>
                    </div>
                  </ModalBody>

                  <ModalFooter className="mb-5 mx-10">
                    <Button color="danger" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" variant="light" onPress={onClose}>
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



      <div>
        <Card className="h-auto shadow-none -mx-6">
          <CardBody className="">
            <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">{/*bg-gray-200*/}
              <TableHeader>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> PROVEEDOR </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> SUCURSAL </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> CODIGO </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> PRODUCTO </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> FAMILIA </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> UNIDAD </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> CANTIDAD </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> COSTO UNITARIO </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> COSTO TOTAL </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> </TableColumn>
              </TableHeader>

              <TableBody>
                {
                  filteredProducts.map((data, i) => (
                    <TableRow key={i}>
                      <TableCell><Link className="text-[#cd9b4a]" name="Proveedores" href="/proveedores">{data.nombre_proveedor}</Link></TableCell>
                      <TableCell>{data.nombre_sucursal}</TableCell>
                      <TableCell>{data.codigo}</TableCell>
                      <TableCell>{data.nombre}</TableCell>
                      <TableCell>{data.familia}</TableCell>
                      <TableCell>{data.unidad}</TableCell>
                      <TableCell>{data.cantidad}</TableCell>
                      <TableCell>{`$` + data.costo_unitario}</TableCell>
                      <TableCell>{`$` + data.costo_total}</TableCell>
                      <TableCell className="w-12">
                        <>
                          <div className="relative flex">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleActualizarClick(data)}>
                              <EditIcon />
                            </span>
                            <span className="pl-2 text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(data.idproducto)}>
                              <DeleteIcon />
                            </span>
                          </div>
                          <Modal 
                            isOpen={isUpdateModalOpen} 
                            onOpenChange={closeUpdateModal} 
                            size="4xl"
                            backdrop="opaque"
                            classNames={{
                              backdrop: "bg-[#000000]/20 backdrop-opacity-40"
                            }}
                          >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1 mt-5 mx-10 text-2xl">Actualizar producto</ModalHeader>

                                  <ModalBody className="mx-10">
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        label="Nombre"
                                        placeholder="Actualizar nombre del producto..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={nomprodActualizado}
                                        onChange={e => setNomprodActualizado(e.target.value)}
                                      />
                                      <Input
                                        label="Codigo"
                                        placeholder="Código de producto"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={codeActualizado}
                                        onChange={e => setCodeActualizado(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        label="Familia"
                                        placeholder="Carnes, Verduras, Lácteos..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={familiaActualizado}
                                        onChange={e => setFamiliaActualizado(e.target.value)}
                                      />
                                      <Input
                                        label="Unidad"
                                        placeholder="Kg, L, Pza..."
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={unidadActualizado}
                                        onChange={e => setUnidadActualizado(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        type="number"
                                        label="Cantidad"
                                        placeholder="20"
                                        labelPlacement="outside"
                                        min="1"
                                        variant="bordered"
                                        value={cantidadActualizado}
                                        onChange={(e) => handleCantidadActu(e)}
                                      // onChange={e => setCantidadActualizado(e.target.value)}
                                      />
                                      <Input
                                        type="number"
                                        label="Costo unitario"
                                        placeholder="0.00"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        min="0"
                                        value={costoActualizado}
                                        //handleCostoUnitarioActu
                                        onChange={(e) => handleCostoUnitarioActu(e)}
                                        // onChange={e => setCostoActualizado(e.target.value)}
                                        startContent={
                                          <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">$</span>
                                          </div>
                                        }
                                      />
                                    </div>
                                    <div className="w-1/4">
                                      <Input
                                        label="Total"
                                        placeholder="0.00"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        min="0"
                                        value={isNaN(totalActualizado) ? '' : totalActualizado}
                                        onChange={(e) => setTotalActualizado(parseFloat(e.target.value))}
                                        // value={totalActualizado}
                                        // onChange={e => setTotalActualizado(e.target.value)}
                                        startContent={
                                          <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">$</span>
                                          </div>
                                        }
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <Select
                                        label="Actualizar proveedor"
                                        className="max-w-xs"
                                        value={proveedorActualizado}
                                        onChange={e => setProveedorActualizado(parseInt(e.target.value) + 1)}
                                      >
                                        {
                                          prodProv.map((data, i) => (
                                            <SelectItem key={i} value={data.idproveedor}>
                                              {data.nombre}
                                            </SelectItem>
                                          ))
                                        }
                                      </Select>
                                      <Select
                                        label="Actualizar sucursal"
                                        className="max-w-xs"
                                        value={sucursalActualizado}
                                        onChange={e => setSucursalActualizado(parseInt(e.target.value) + 1)}
                                      >
                                        {
                                          prodSuc.map((data, i) => (
                                            <SelectItem key={i} value={data.idsucursal}>
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
    </div>

  )
}
export default Inventario