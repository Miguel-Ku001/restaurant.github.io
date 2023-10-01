import {Card, Image, CardBody, Link} from "@nextui-org/react";

export const Servicios = () => {
  return (
    <div className="mb-40 font-marcellus">
      <div className="flex items-center justify-center px-24 py-16 mx-auto">
        <Image
          width={1000}
          className="object-cover z-1"
          alt="NextUI hero Image"
          src="/src/images/imagen1-servicios.jpeg"
          radius="lg"
        />
        <Card 
          className="w-1/2 absolute h-auto">
          
          <CardBody className="w-100 bg-white rounded-xl flex items-center justify-center">
            <h3 className="absolute text-4xl text-center text-gray-800 pb-24">SERVICIO Y EXPERIENCIA</h3>
            <p className="text-base text-center text-gray-600 pt-20 ">Fusionamos la pasión culinaria con ingredientes de calidad para crear platos memorables.  Nuestro equipo cuidadosamente seleccionado y amable personal se dedica a hacer de su visita una experiencia inolvidable. Ya sea una cena romántica o un evento especial, en nuestro restaurante encontrará un ambiente perfecto.</p>
          </CardBody>
        </Card>
      </div>


      <div className="mx-auto w-1/2 h-auto py-14">
        <h2 className="text-4xl text-center text-gray-800 pb-4">DESCUBRELOS</h2>
        <p className="text-center text-gray-900">Nuestros servicios especializados que se adaptan a sus necesidades. Desde consultoría estratégica hasta soluciones a medida, estamos aquí para potenciar su éxito.</p>
      </div>

      <div className="mx-auto columns-3 h-auto px-36 py-16 grid grid-cols-3 gap-20">
        <div className="z-0 grid place-items-center">
          <div className="">
            <Image
              isZoomed
              width={240}
              alt="NextUI Fruit Image with Zoom"
              src="/src/images/imagen2-servicios.png"
            />
          </div>
          <h3 className="h-8 text-center text-2xl text-gray-800 my-4">EVENTOS</h3>
          <p className="h-44 text-justify text-base text-gray-900 px-14"> Nuestros servicios para eventos ofrecen opciones de menús personalizados y atención de primera clase para que su ocasión especial sea verdaderamente única. 
            <br/>
            <Link color="foreground" name="Eventos" href="/servicios/eventos" className="text-gray-800 mt-4">
              Saber más...
            </Link>
          </p>
          
        </div>

        <div className="z-0 grid place-items-center">
          <div className="">
            <Image
              isZoomed
              width={240}
              alt="NextUI Fruit Image with Zoom"
              src="/src/images/imagen3-servicios.png"
            />
          </div>
            <h3 className="h-8 text-center text-2xl text-gray-800 my-4">BODAS</h3>
            <p className="h-44 text-justify text-base text-gray-900 px-14"> Un banquete de boda de ensueño: En nuestro restaurante, hacemos que su día especial sea aún más mágico con servicios personalizados para bodas.  
              <br/>
              <Link color="foreground" name="Bodas" href="/servicios/bodas" className="text-gray-800 mt-4">
                Saber más...
              </Link>
            </p>
        </div>

        <div className="z-0 grid place-items-center">
          <div className="">
            <Image
              isZoomed
              width={240}
              alt="NextUI Fruit Image with Zoom"
              src="/src/images/imagen4-servicios.png"
            />
          </div>
            <h3 className="h-8 text-center text-2xl text-gray-800 my-4">CATERING</h3>
            <p className="h-44 text-justify text-base text-gray-900 px-14"> Catering excepcional: Nuestros servicios de catering brindan una experiencia culinaria sobresaliente en cualquier lugar que elija.
              <br/>
              <Link color="foreground" name="Catering" href="/servicios/catering" className="text-gray-800 mt-4">
                Saber más...
              </Link>
            </p>
        </div>

      </div>

    </div>
    
  );
}
export default Servicios