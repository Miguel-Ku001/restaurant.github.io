import {Link, Button} from "@nextui-org/react";
import {HiCheckCircle} from "react-icons/hi";

export const ShoppingCart = () => {
  return (
    <div className="h-[45rem]">
      <div className="py-5 w-1/2 px-1 font-marcellus my-20 mx-auto text-center bg-green-600 rounded-full text-white flex justify-center">
        <HiCheckCircle size="2em" className="mr-2"/>
        <span className="inline-block align-middle">
          ¡Tu orden se ha generado con éxito! Por favor revisa tu número de orden en el apartado: 
          <Button as={Link} href="/ordenes/cliente" color="primary" variant="flat" className="text-orange-300 bg-transparent hover:text-orange-500">
            Mis Ordenes
          </Button>
        </span>
      </div>
    </div>
  )
  }
  export default ShoppingCart