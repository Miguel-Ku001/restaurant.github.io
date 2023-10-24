import {Image, Input, Button} from "@nextui-org/react";

export const MenuItem = (item) => {
    return (
        <div className="flex flex-row justify-between w-full mb-5">
            <div className="flex flex-col items-end p-4 w-1/2">
            <Image
                className="w-40 h-40 object-cover"
                src={`../src/images/vista-menu/${item.imagen}`}
                radius="none"
            />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
            <div className="h-4/6">
                <h3 className="text-2xl text-gray-800 text-left uppercase">
                    {item.nombre}
                </h3>
                <p className="mb-2 text-justify text-gray-800">
                    {item.descripcion}
                </p>
                <p>
                    Precio: ${item.precio}
                </p>
            </div>
            <div className="h-2/6 flex justify-end">
                    <p className="mt-2 mr-3">Cantidad</p>
                    <Input
                        placeholder="0"
                        type="number"
                        min="0" 
                        max="1000"
                        variant="bordered"
                        className="w-20 mr-5"
                    />
                    <Button variant="flat" className=" active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 text-white transition duration-500 bg-[#28a332]">
                      <h3>Agregar al carrito</h3>
                    </Button>
            </div>
            </div>
        </div>
    )
  }
  export default MenuItem