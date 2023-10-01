import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody} from "@nextui-org/react";

export const Solicitudservicio = () => {
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
                          />
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <select                 
                        name="servicio"
                        autoComplete="service-name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell className="-mt-40">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="username"        
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Email"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="username"                    
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Fecha"
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
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="username"                      
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Hora"
                        />
                      </div>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell></TableCell>
                    <TableCell>
                      <button href="#" className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500">Agendar</button>
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