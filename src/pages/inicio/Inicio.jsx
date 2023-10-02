import {Card, Image, CardBody, Divider} from "@nextui-org/react";

export const Inicio = () => {
  return (
    <div className="font-marcellus">
      <div className="flex items-center justify-center p-10 mx-auto">
          <Image
            className="object-cover z-1 w-screen px-14"
            alt="NextUI hero Image"
            src="./src/images/vista-inicio/inicio.png"
            radius="lg"
          />
          <img
        className="h-96 w-96 absolute rounded-full object-cover object-center"
        src="./src/images/vista-inicio/LOGOP.jpg"
        alt="nature image"
      />
      </div>

      <div className="flex justify-center mb-16">
        <Card className="w-3/5 h-auto py-2">
          <CardBody className="w-100 bg-white rounded-xl flex items-center justify-center p-10">
            <h2 className="text-5xl text-center text-gray-800">ESTILO Y ELEGANCIA</h2>
            <p className="text-base text-center text-gray-600 pt-4 ">Bienvenidos a nuestro restaurante, donde el estilo y la elegancia se fusionan para ofrecerte una experiencia culinaria única.
            Cada comida es una celebración de la vida, y estamos ansiosos por compartir esta experiencia contigo. ¡Esperamos que disfrutes de nuestro rincón de estilo y elegancia!</p>
          </CardBody>
      </Card>
      </div>


      <div className="mx-auto h-auto py-14 grid grid-cols-3 p-10">
        <div className="z-0 grid place-items-center">
          <div className="w-72">
            <Image
              className="h-[20rem]"
              alt="GUSSAB"
              src="./src/images/vista-inicio/tacos.jpg"
            />
          </div>
        </div>

        <div className="z-0 grid place-items-center">
          <div className="w-96">
            <Image
              className="h-[30rem]"
              alt="GUSSAB"
              src="./src/images/vista-inicio/pastor.jpg"
            />
          </div>
        </div>

        <div className="z-0 grid place-items-center">
          <div className="w-72">
            <Image
              className="h-[20rem]"
              alt="GUSSAB"
              src="./src/images/vista-inicio/tacos2.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mx-40">
        <Divider className="my-4" />
      </div>

      <div className="flex justify-center">
        <Card className="w-full h-auto mx-20 shadow-none">
          <CardBody className="items-center justify-center">
            <h2 className="text-5xl text-center text-gray-800">¿QUIENES SOMOS?</h2>
            <p className="text-base text-center text-gray-600 pt-4 ">Desde 2020, hemos perfeccionado nuestra cocina, destacando los auténticos sabores de nuestra cocina con ingredientes frescos. Nuestra decoración elegante y ambiente acogedor crean un espacio perfecto para celebraciones especiales o cenas inolvidables. En GUSSAB, no solo ofrecemos platos exquisitos, sino también un servicio cálido y atento, haciendo que cada visita sea memorable. ¡Únete a nosotros y descubre una experiencia gastronómica única en Mérida!</p>
          </CardBody>
      </Card>
      </div>

      <div className="mx-40">
        <Divider className="my-4" />
      </div>

      <div className="mt-16">
        <h2 className="text-5xl text-center text-gray-800">CONOCE NUESTRA MISION, VISION Y VALORES</h2>
      </div>


      <div className="mx-auto h-auto py-14 grid grid-cols-3 p-10">
        <div className="z-0 grid place-items-center">
          <h3 className="h-8 text-center text-2xl text-gray-800 my-4">MISION</h3>
          <p className="h-44 text-justify text-base text-gray-800 px-14"> Ofrecer a nuestros comensales una experiencia culinaria excepcional, resaltando sabores auténticos y atención personalizada en un entorno acogedor. 
          </p> 
        </div>

        <div className="z-0 grid place-items-center">
            <h3 className="h-8 text-center text-2xl text-gray-800 my-4">VALORES</h3>
            {/* <p className="h-44 text-justify text-base text-gray-800 px-14">  */}
            <ul className="list-disc h-44 text-justify text-base text-gray-800 px-14">
                <li>Pasión por la calidad culinaria.</li>
                <li>Atención y servicio excepcionales.</li>
                <li>Autenticidad en cada plato.</li>
                <li>Compromiso con la satisfacción del cliente.</li>
              </ul>
            {/* </p> */}
        </div>

        <div className="z-0 grid place-items-center">
            <h3 className="h-8 text-center text-2xl text-gray-800 my-4">VISION</h3>
            <p className="h-44 text-justify text-base text-gray-800 px-14"> 
              Ser reconocidos como el destino gastronómico preferido de México, destacando por nuestra cocina única y servicio excepcional.
            </p>
        </div>
      </div>
</div>
  )
}
export default Inicio