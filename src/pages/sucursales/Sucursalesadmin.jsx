import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody, useDisclosure, Textarea } from "@nextui-org/react";
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

export const Adminsucursal = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isUpdateModalOpen, onOpen: openUpdateModal, onClose: closeUpdateModal } = useDisclosure();

  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [horario, setHorario] = useState('')
  const [img, setImg] = useState('')
  
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('direccion', direccion);
  formData.append('horario', horario);
  formData.append('img', img);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/sucursal/crear', formData)
      .then(res => {
        console.log(res);
        window.location.reload()
      }).catch(err => console.log(err));
  }

  // --------------------------ACTUALIZAR---------------------------//
  const [registroActual, setRegistroActual] = useState(null);
  const [nombreActualizado, setNombreActualizado] = useState('');
  const [direccionActualizado, setDireccionActualizado] = useState('');
  const [horarioActualizado, setHorarioActualizado] = useState('');
  const [imgActualizado, setImgActualizado] = useState('')

  //-----------------------------/

  const updatedFormData = new FormData();

  updatedFormData.append('nombre', nombreActualizado);
  updatedFormData.append('direccion', direccionActualizado);
  updatedFormData.append('horario', horarioActualizado);
  updatedFormData.append('img', imgActualizado);

  const handleActualizarClick = (registro) => {
    setRegistroActual(registro);

    setNombreActualizado(registro.nombre);
    setDireccionActualizado(registro.direccion);
    setHorarioActualizado(registro.horario);
    setImgActualizado(registro.imagen);

    openUpdateModal();
  };

  function handleUpdate(event) {
    event.preventDefault();

    if (imgActualizado === registroActual.imagen) {
      updatedFormData.delete('img');
    }

    axios.put(`/api/sucursal/actualizar/${registroActual.idsucursal}`, updatedFormData)
      .then(res => {
        window.location.reload()
        console.log(res);
      }).catch(err => console.log(err));
  }

  const handleDelete = async (registro) => {
    setRegistroActual(registro);

    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este registro?");

    if (confirmDelete) {
      try {
        await axios.delete(`/api/sucursal/eliminar/${registro}`)
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [item, setItem] = useState([])
  useEffect(() => {
    axios.get('/api/sucursal')
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  return (

    <div className="py-16 px-24 font-marcellus">
      <div className="mb-10">
        <h2 className="text-5xl text-center text-gray-800">SUCURSALES</h2>
      </div>

      <div>
        <>
          <div className="mb-6">
            <button className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-[#092A3A] text-white transition duration-500" onClick={onOpen}>Agregar sucursal</button>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">AGREGAR SUCURSAL</ModalHeader>

                  <ModalBody className="mx-10">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Nombre"
                        placeholder="Nombre de la sucursal"
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setNombre(e.target.value)}
                      />
                      <Input
                        label="Dirección"
                        placeholder="Escribe la dirección"
                        labelPlacement="outside"
                        variant="bordered"
                        onChange={e => setDireccion(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                          <Textarea
                            label="Horario"
                            placeholder="Escribe el horario"
                            labelPlacement="outside"
                            variant="bordered"
                            onChange={e => setHorario(e.target.value)}
                          />
                      <div>
                        <p className="font-semibold text-sm">Imagen de la sucursal</p>
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
                    </div>
                  </ModalBody>
                    <ModalFooter className="mb-5 mx-10">
                      <Button color="danger" variant="light" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" onPress={onClose}>
                        Cancelar
                      </Button>
                      <Button color="primary" className="bg-[#cd9b4a] w-1/5 active:scale-95 hover:scale-105 shadow-xl transition duration-500" onClick={handleSubmit} onPress={onClose}>
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
                <TableColumn className="bg-[#092A3A] text-white font-medium"> SUCURSAL </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> DIRECCIÓN </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> HORARIO </TableColumn>
                <TableColumn className="bg-[#092A3A] text-white font-medium"> </TableColumn>
              </TableHeader>
              <TableBody>
                {
                  item.map((data, i) => (

                    <TableRow key={i}>
                      <TableCell> {data.nombre} </TableCell>
                      <TableCell> {data.direccion} </TableCell>
                      <TableCell className="whitespace-pre-wrap"> {data.horario} </TableCell>
                      <TableCell className="w-12">
                        <>
                        <div className="relative flex">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleActualizarClick(data)}>
                            <EditIcon />
                          </span>
                          <span className="text-lg pl-2 text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(data.idsucursal)}>
                            <DeleteIcon />
                          </span>
                        </div>                        
                          <Modal isOpen={isUpdateModalOpen} onOpenChange={closeUpdateModal} size="4xl">
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1 mt-5 mx-10">Actualizar</ModalHeader>

                                  <ModalBody className="mx-10">
                                    <div className="grid grid-cols-2 gap-4">
                                      <Input
                                        label="Actualizar nombre"
                                        placeholder="Nombre del producto"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={nombreActualizado}
                                        onChange={e => setNombreActualizado(e.target.value)}
                                      />
                                      <Input
                                        label="Actualizar dirección"
                                        placeholder="Escribe la dirección"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={direccionActualizado}
                                        onChange={e => setDireccionActualizado(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                                      <Textarea
                                        label="Actualizar horario"
                                        placeholder="Escribe el horario"
                                        labelPlacement="outside"
                                        variant="bordered"
                                        value={horarioActualizado}
                                        onChange={e => setHorarioActualizado(e.target.value)}
                                      />
                                      <div>
                                        <p className="font-semibold text-sm">Actualizar imagen de la sucursal</p>
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
                                    </div>
                                  </ModalBody>
                                  <ModalFooter className="mb-5 mx-10">
                                    <Button color="danger" variant="light" className="font-semibold text-red-400 w-1/5 active:scale-95 hover:scale-105 shadow-xl border transition duration-500" onPress={onClose}>
                                      Cancelar
                                    </Button>
                                    <Button color="primary" className="bg-[#cd9b4a] w-1/5 active:scale-95 hover:scale-105 shadow-xl transition duration-500" onClick={handleUpdate} onPress={onClose}>
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
export default Adminsucursal