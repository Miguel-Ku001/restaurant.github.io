import {Input, Textarea} from "@nextui-org/react";

export const Ordenes = () => {
    return (
      <div className="mx-auto max-w-screen-2xl py-24 sm:px-6 sm:py-10 lg:px-8 h-screen">
        <div className="bg-white m-10 rounded-xl h-4/5 shadow-xl py-8 px-20">
          <div>
            <h2 className="text-4xl text-center text-gray-800 pb-4 font-medium">Ordenar</h2>
          </div>
          <div>
            <div className="w-1/2 py-2 pr-10">
              <div>
                <h4 className="text-xl  text-gray-800">Nombre y apellido*</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
                  <Input type="text" label="Nombre" variant="bordered"/>
                  <Input type="text" label="Apellido" variant="bordered"/>
                </div>
              </div>
              <div>
                <h4 className="text-xl  text-gray-800">Numero de telefono*</h4>
                <div className="mt-2 mb-6">
                  <Input type="text" label="Apellido" variant="bordered"/>
                </div>
              </div>
              <div>
                <h4 className="text-xl  text-gray-800">Direccion donde se envia la comida*</h4>
                <div className="mt-2 mb-6">
                  <Input type="text" label="Apellido" variant="bordered"/>
                </div>
              </div>
              <div>
                <h4 className="text-xl  text-gray-800">Referencias*</h4>
                <div className="mt-2 mb-6">
                  <Textarea
                    variant="bordered"
                    placeholder="Referencia"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                  />
                </div>
              </div>
            </div>


            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }
  export default Ordenes