import { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody} from "@nextui-org/react";
import axios from "axios";

export const Solicitudservicio = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipo_servicio, setTipo_servicio] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [cantidad_invitados, setCantidad_invitados] = useState('')
  const [especificaciones, setEspecificaciones] = useState('')
  
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('email', email);
  formData.append('telefono', telefono);
  formData.append('tipo_servicio', tipo_servicio);
  formData.append('fecha', fecha);
  formData.append('hora', hora);
  formData.append('cantidad_invitados', cantidad_invitados);
  formData.append('especificaciones', especificaciones);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/reservacion/crear', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        window.location.reload()
      }).catch(err => console.log(err));
  }

  const [item, setItem] = useState([])
  useEffect(() => {
    axios.get('/api/reservacion')
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

    return (
      <div className="font-marcellus">
        <div className="mt-16 mb-10">
          <h2 className="text-5xl text-center text-gray-800">RESERVACION</h2>
        </div>

        <div className="flex justify-center mb-16">
          <Card className="w-3/5 h-auto py-2">
            <CardBody className="w-100 bg-white rounded-xl flex justify-center p-10">
            <p className="ml-7 text-lg font-medium">FORMULARIO DE CONTACTO</p>           
            <Table hideHeader className="items-center" aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn className="text-gray-800 bg-white">FORMULARIO DE CONTACTO</TableColumn>
                  <TableColumn className="bg-white"></TableColumn>
                  <TableColumn className="bg-white"></TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                          <input
                            type="text"
                            name="username"                         
                            autoComplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Nombre"
                            onChange={e => setNombre(e.target.value)}
                          />
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <select                 
                        name="servicio"
                        autoComplete="service-name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={e => setTipo_servicio(e.target.value)}
                      >
                        <option>Evento</option>
                        <option>Catering</option>
                        <option>Boda</option>
                      </select>
                    </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="username"                       
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Cantidad de invitados"
                          onChange={e => setCantidad_invitados(e.target.value)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell className="-mt-40">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="email"
                          name="username"        
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Email"
                          onChange={e => setEmail(e.target.value)}
                          
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="date"
                          name="username"                    
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Fecha"
                          onChange={e => setFecha(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className=""> 
                        <div className="">
                          <textarea
                            name="about"
                            rows={3}
                            className="-mb-12 block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            placeholder="Especificaciones"
                            defaultValue={''}
                            onChange={e => setEspecificaciones(e.target.value)}
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow key="3" >
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="username"                     
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Teléfono"
                          onChange={e => setTelefono(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="time"
                          name="username"                      
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Hora"
                          onChange={e => setHora(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell></TableCell>
                    <TableCell>
                      <button href="#" className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500" onClick={handleSubmit}>Agendar</button>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>






      </div>
      
      
      
    )
  }
  export default Solicitudservicio