import {Image, Link, Button} from "@nextui-org/react";

export const Bodas = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 mx-auto mb-64 font-marcellus">
      <div className="mx-auto h-auto">
        <h2 className="mx-auto text-center w-40 py-1.5 pt-8 px-4 text-4xl text-gray-800">BODAS</h2>
        <h3 className="text-center py-6 mx-80 text-lg text-gray-800">El equipo de profesionales y asesores del restaurante GUSSAB les acompañarán en el magnífico diseño de su boda.</h3>
        <p className="text-center px-4 text-2xl text-gray-800">Te damos 3 motivos por los que tu boda sea inolvidable</p>
      </div>


      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">1</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">EL ENTORNO</h3>
        </div>

        <div className="flex items-center justify-center">

          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen1-boda.png"
              radius="none"
            />
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/lineavertical.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <p className="mb-2 text-gray-800">
            El restaurante GUSSAB se encuentra en un entorno excepcional que proporciona
            el escenario perfecto para una boda inolvidable. Ya sea que elijas una boda al
            aire libre en sus jardines bien cuidados o una ceremonia íntima en su elegante salón,
            el entorno natural y la decoración cuidadosamente seleccionada crearán una atmósfera
            mágica que tus invitados recordarán para siempre. La belleza del lugar servirá como
            telón de fondo para tu día especial, haciendo que cada momento sea único y memorable.
            </p>
            
          </div>
        </div>
      </div>

      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">2</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">LA COCINA</h3>
        </div>

        <div className="flex items-center justify-center">

          <div className="w-2/5">
            <p className="mb-3 text-gray-800">
            El restaurante GUSSAB se enorgullece de ofrecer una experiencia gastronómica excepcional.
            Su equipo de chefs expertos preparará un banquete que deleitará los paladares de tus
            invitados.            
            </p>
            <p className="text-gray-800">
            Desde exquisitos platos de la cocina local hasta opciones internacionales, la variedad y
            la calidad de la comida harán que tu boda sea inolvidable.  Además, el equipo estará dispuesto
            a personalizar el menú de acuerdo a tus preferencias y requisitos dietéticos, asegurando que
            todos tus invitados disfruten de una deliciosa comida.
            </p>
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/lineavertical.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen2-boda.png"
              radius="none"
            />
          </div>

        </div>
      </div>

      <div className="mx-auto h-auto w-1/2 z-0">
        <div className="flex items-center justify-center flex-col mt-8">
          <h2 className="mx-auto text-center w-40 text-4xl text-gray-800">3</h2>
          <h3 className="mb-4 text-center text-2xl text-gray-800">EXTRAS</h3>
        </div>

        <div className="flex items-center justify-center">

          <div className="w-2/5">
            <Image
              width={3170}
              src="/src/images/imagen3-boda.png"
              radius="none"
            />
          </div>

          <div className="mx-10 w-4 flex justify-center">
            <img className="w-0.4" src="/src/images/lineavertical.png" alt="Linea separadora" />
          </div>

          <div className="w-2/5">
            <p className="mb-1 text-gray-800">
            En GUSSAB, se esfuerzan por hacer que tu boda sea única y personalizada.
            Su equipo de profesionales y asesores estará a tu disposición para ayudarte
            a planificar cada detalle, desde la elección de la música y la decoración
            hasta la organización de actividades especiales para tus invitados.
            Nuestro resturante se encargará de que todos los detalles estén a la altura de tus expectativas,
            creando así una experiencia nupcial verdaderamente inolvidable.
            </p>
          </div>
        </div>
      </div>

      
      <div>
        <Button as={Link} color="primary"  href="/servicios/solicitud-de-servicio" variant="flat" className="active:scale-95 hover:scale-105 mt-28 shadow-xl rounded-lg py-3 px-10 text-white transition duration-500 bg-[#092A3A]">
          <h3>Reservar</h3>
        </Button>
        {/* <button href="#" className="active:scale-95 hover:scale-105 mt-28 shadow-xl rounded-lg py-3 px-10 bg-sky-950 text-white transition duration-500">Reservar</button> */}
      </div>


    </div>
  )
}

export default Bodas