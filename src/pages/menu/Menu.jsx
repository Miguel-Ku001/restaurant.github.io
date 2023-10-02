import {Image, Link, Button} from "@nextui-org/react";

export const Menu = () => {
    return (
      <div className="py-16 px-24 font-marcellus">
        <div className="mb-10">
            <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
        </div>

        <div className="columns-2 mb-12 mt-8">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/tacopastor.jpg"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                TACO DE PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                Tortilla de maiz o harina rellena de carne de pastor, servida con cebolla, cilantro y piña.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/nachospastor.jpg"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                NACHOS AL PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                Cubierto con trozos de carne al pastor, queso derretido, guacamole, crema, cebolla, cilantro y salsa picante.
              </p>
            </div>
          </div>
        </div>

        <div className="columns-2 mb-12">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/tortapastor.jpg"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                TORTA AL PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                El relleno de los tacos al pastor se coloca en un bollo estilo telera, con mayonesa, frijoles, lechuga, aguacate y otros ingredientes.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/sopepastor.jpg"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                SOPES AL PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                Pequeñas tortillas gruesas de maíz con un borde doblado hacia arriba, rellenas de carne al pastor, frijoles refritos y crema.
              </p>
            </div>
          </div>
        </div>





        <div className="columns-2 mb-12">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/burritopastor.png"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                BURRITO DE PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                Carne de pastor, arroz, frijoles, queso, crema y otros ingredientes enrollados en una tortilla de harina.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-end p-4 w-1/2">
              <Image
                width={160}
                height={160}
                src="/src/images/vista-menu/quesadillapastor.jpg"
                radius="none"
              />
            </div>

            <div className="flex flex-col items-left p-4 w-4/5">
              <h3 className="text-2xl text-gray-800 text-left">
                QUESADILLA DE PASTOR
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                Tortilla de harina rellena de carne al pastor y queso, acompañado de guacamole y crema.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center">
          <div className="w-1/5">
            <Button as={Link} color="primary"  href="/menu/ordenes" variant="flat" className=" w-full active:scale-95 hover:scale-105 mt-20 shadow-xl rounded-lg py-3 px-10 text-white transition duration-500 bg-[#092A3A]">
              <h3>Ordenar</h3>
            </Button>
            {/* <button href="/menu/ordenes/forma-de-pago" className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500">Ordenar</button>                   */}
          </div>
        </div>

      </div>
        )
  }
  export default Menu