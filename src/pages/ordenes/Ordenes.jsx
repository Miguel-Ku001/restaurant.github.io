import {Input, Textarea} from "@nextui-org/react";

export const Ordenes = () => {
    return (
      <div className="mx-auto max-w-screen-2xl py-24 sm:px-6 sm:py-10 lg:px-8 h-screen">
        <div>
          <h2 className="text-4xl text-center text-gray-800 pb-4 font-medium">ORDENAR</h2>
        </div>
        <div className="bg-white m-10 rounded-xl h-4/5 shadow-xl py-8 px-20">
          <div className="flex">
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


            <div className="w-1/2 py-2 pl-10">
              <div className="grid grid-cols-3 gap-4 mt-2 mb-4">
                <h4 className="text-xl  text-gray-800">PRODUCTO</h4>
                <h4 className="text-xl  text-gray-800">CANTIDAD</h4>
                <h4 className="text-xl  text-gray-800">PRECIO</h4>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Taco de pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Torta al pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Quesadilla de pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Burrito al pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Nachos al pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-2 mb-6">
                <p className="text-lg  text-gray-800">Sopes al pastor</p>
                <Input
                  placeholder="0"
                  type="number"
                  min="0" 
                  max="1000"
                  variant="bordered"
                />

                <Input
                  placeholder="0.00"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">MXN</span>
                    </div>
                  }
                  type="number"
                  isReadOnly
                />
              </div>

              <div className="flex flex-row-reverse">
                <div className="w-1/4">
                  <button href="#" className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500">Ordenar</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
  export default Ordenes