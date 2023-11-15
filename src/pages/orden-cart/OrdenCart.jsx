import {Link, Button} from "@nextui-org/react";
import {HiCheckCircle} from "react-icons/hi";
import { useEffect } from 'react';
export const ShoppingCart = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const session_id = urlParams.get('session_id');

    // Verificar si el session_id está presente y si aún no se ha enviado la solicitud
    if (session_id && !localStorage.getItem('sessionSent')) {
      // Enviar la solicitud a /api/orden
      fetch('/api/orden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id }),
      });

      // Actualizar el indicador en localStorage para evitar futuros envíos
      localStorage.setItem('sessionSent', 'true');
    }
  }, []);

  localStorage.removeItem('shopping-cart');

  return (
    <div className="h-[45rem]">
      <div className="py-5 w-1/2 px-1 font-marcellus my-20 mx-auto text-center bg-[#092A3A] rounded-full text-white flex justify-center">
        <HiCheckCircle size="2em" className="mr-2"/>
        <span className="inline-block align-middle">
          ¡Tu orden se ha generado con éxito! Por favor revisa tu número de orden en el apartado: 
          <Button as={Link} href="/ordenes/cliente" color="primary" variant="flat" className="text-orange-300 font-bold bg-transparent hover:text-orange-500">
            Mis Ordenes
          </Button>
        </span>
      </div>
    </div>
  )
  }
  export default ShoppingCart