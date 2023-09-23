

import {Card, Image, CardBody} from "@nextui-org/react";

export const Servicios = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        width={1000}
        className="object-cover z-1"
        alt="NextUI hero Image"
        src="/src/images/imagen1-servicios.jpeg"
        radius="lg"
      />
      
      <Card 
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-2 px-24">
        
        <CardBody className="w-100 bg-white rounded-xl flex items-center justify-center p-10">
          <h2 className="absolute text-5xl text-center text-gray-800 pb-32">Servicio y experiencia</h2>
          <p className="text-base text-center text-gray-600 pt-20 ">Fusionamos la pasión culinaria con ingredientes de calidad para crear platos memorables.  Nuestro equipo cuidadosamente seleccionado y amable personal se dedica a hacer de su visita una experiencia inolvidable. Ya sea una cena romántica o un evento especial, en nuestro restaurante encontrará un ambiente perfecto.</p>
        </CardBody>
      </Card>
    
    </div>
    
    
  );
}
export default Servicios