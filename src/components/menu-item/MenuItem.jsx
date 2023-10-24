import {Image} from "@nextui-org/react";

export const MenuItem = (item) => {
    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
            <Image
                className="w-40 h-40 object-cover"
                src={`../src/images/vista-menu/${item.imagen}`}
                radius="none"
            />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
            <h3 className="text-2xl text-gray-800 text-left uppercase">
                {item.nombre}
            </h3>
            <p className="mb-2 text-justify text-gray-800">
                {item.descripcion}
            </p>
            </div>
        </div>
    )
  }
  export default MenuItem