import { useEffect, useState } from "react";
import { Card, CardBody, Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import axios from "axios";

export const Solicitudservicio = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipo_servicio, setTipo_servicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [cantidad_invitados, setCantidad_invitados] = useState('');
  const [especificaciones, setEspecificaciones] = useState('');

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
    const idusuario = localStorage.getItem('idusuario');

    formData.append('idusuario', idusuario);

    axios.post('/api/reservacion/crear', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="font-marcellus">
      <div className="mt-16 mb-10">
        <h2 className="text-5xl text-center text-gray-800">RESERVACIÓN</h2>
      </div>

      <div className="flex justify-center mb-16">
        <Card className="w-3/5 h-auto py-2">
          <CardBody className="w-100 bg-white rounded-xl justify-center p-10">
            <p className="pb-4 text-lg text-2x1">FORMULARIO DE CONTACTO</p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div>
                  <Input
                    type="text"
                    placeholder="Escribe tu nombre"
                    labelPlacement="outside"
                    variant="bordered"
                    className="pb-4"
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Escribe tu correo"
                    labelPlacement="outside"
                    variant="bordered"
                    className="pb-4"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="text"
                    placeholder="Escribe tu teléfono"
                    labelPlacement="outside"
                    variant="bordered"
                    onChange={e => setTelefono(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div>
                  <Select
                    aria-labelledby="tipo-servicio-label"
                    placeholder="Elige el servicio"
                    labelPlacement="outside"
                    variant="bordered"
                    className="pb-4"
                    onChange={e => setTipo_servicio(e.target.value)}
                  >
                    <SelectItem key="1">Evento</SelectItem>
                    <SelectItem key="2">Catering</SelectItem>
                    <SelectItem key="3">Boda</SelectItem>
                  </Select>
                </div>
                <div>
                  <Input
                    type="date"
                    placeholder="Escribe la fecha"
                    labelPlacement="outside"
                    variant="bordered"
                    className="pb-4"
                    onChange={e => setFecha(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    type="time"
                    placeholder="Escribe la hora"
                    labelPlacement="outside"
                    variant="bordered"
                    onChange={e => setHora(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Input
                    type="number"
                    placeholder="Escribe la cantidad de invitados"
                    labelPlacement="outside"
                    variant="bordered"
                    className="pb-4"
                    onChange={e => setCantidad_invitados(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    maxRows={3}
                    placeholder="Escribe las especificaciones para el servicio"
                    labelPlacement="outside"
                    variant="bordered"
                    className="-mt-2 py-1.5 pl-1"
                    defaultValue=""
                    onChange={e => setEspecificaciones(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="flex ">
                <button className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500" onClick={handleSubmit}>Agendar</button>
              </div> */}
            </div>
            <div className="flex pt-8 justify-center w-full mb-4">
              <Button className="w-1/4 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500" onClick={handleSubmit}>Agendar</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Solicitudservicio;