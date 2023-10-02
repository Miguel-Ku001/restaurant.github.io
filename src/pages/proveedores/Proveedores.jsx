import { Image, Button, Link } from "@nextui-org/react";

const proveedoresIzquierda = [
  {
    nombre: "PROVEEDOR DE CARNE DE CERDO",
    imagen: "/src/images/provedores/imagen-provedores1.jpg",
    informacion: "Carnes Deliciosas S.A. es una empresa familiar dedicada a proveer carne de cerdo de la más alta calidad a restaurantes, hoteles y supermercados en toda la región. Nuestro compromiso es ofrecer productos frescos, sabrosos y seguros para el consumo, garantizando la satisfacción de nuestros clientes en cada bocado.",
  },
  {
    nombre: "PROVEEDOR DE TORTILLA DE MAIZ",
    imagen: "/src/images/provedores/imagen-provedores6.jpg",
    informacion: "El Maíz Mágico es una empresa familiar dedicada a la elaboración artesanal de tortillas de maíz de la más alta calidad. Utilizamos maíz cosechado en nuestros campos y técnicas ancestrales transmitidas de generación en generación para brindar autenticidad y sabor en cada tortilla que producimos. Nuestro compromiso es llevar a tu mesa la esencia de la cultura y tradición mexicana.",
  },
  {
    nombre: "PROVEEDOR DE EQUIPAMIENTO PARA COCINA",
    imagen: "/src/images/provedores/imagen-provedores3.jpg",
    informacion: "EquipaCocina es una empresa especializada en proveer equipamiento de alta calidad para cocinas profesionales y amantes de la gastronomía. Ofrecemos una amplia gama de productos que van desde utensilios de cocina hasta electrodomésticos industriales, diseñados para satisfacer las necesidades de chefs y entusiastas de la cocina. Nuestro compromiso es proporcionar equipos duraderos, funcionales e innovadores que potencien la creatividad y eficiencia en cada cocina.",
  },
];

const proveedoresDerecha = [
  {
    nombre: "PROVEEDOR DE ESPECIAS Y ABONOS",
    imagen: "/src/images/provedores/imagen-provedores5.jpg",
    informacion: "Verde Aroma es una empresa comprometida con la producción y distribución de especias orgánicas y abonos naturales para agricultura. Cultivamos nuestras especias en tierras fértiles y aplicamos métodos de cultivo sostenibles para garantizar la más alta calidad. Nuestros abonos naturales son elaborados con ingredientes orgánicos, promoviendo un crecimiento saludable de las plantas y contribuyendo al cuidado del medio ambiente.",
  },
  {
    nombre: "PROVEEDOR DE SALSAS Y CONDIMENTOS",
    imagen: "/src/images/provedores/imagen-provedores2.jpg",
    informacion: "Sazones del Mundo es una empresa especializada en la producción y distribución de salsas y condimentos únicos provenientes de diferentes partes del mundo. Nuestro objetivo es llevar a tu cocina una amplia variedad de sabores y aromas para enriquecer tus platos y despertar tus sentidos. Nos esforzamos por garantizar la frescura y autenticidad de cada producto, asegurando así una experiencia culinaria excepcional.",
  },
  {
    nombre: "PROVEEDOR DE VERDURAS Y GUARNICIONES",
    imagen: "/src/images/provedores/imagen-provedores4.jpg",
    informacion: "Huerto Fresco es una empresa dedicada a la producción y distribución de verduras frescas, guarniciones y productos agrícolas de alta calidad. Cultivamos nuestros productos en tierras fértiles y aplicamos técnicas agrícolas sostenibles para asegurar la frescura y pureza de cada verdura que entregamos. Nuestro compromiso es abastecer a restaurantes, hoteles y comercios locales con ingredientes naturales y saludables para una alimentación balanceada y deliciosa.",
  },
];

const Proveedores = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 mx-auto mb-8 font-marcellus">
      <h2 className="text-center text-4xl text-gray-800 mb-8 mt-16">NUESTROS PROVEEDORES</h2>

      <div className="flex flex-col md:flex-row justify-center items-center w-full  mr-20">
        <div className="flex flex-col items-center p-4">
          {proveedoresIzquierda.map((proveedor, index) => (
            <div key={index} className="mb-8 flex flex-col items-center h-[32rem]">
              <h3 className="text-2xl text-gray-800 mb-2">
                {proveedor.nombre}
              </h3>
              <Image
                width={200}
                height={200}
                src={proveedor.imagen}
                radius="none"
              />
              <p className="mt-4 text-gray-800 text-left max-w-md text-justify">
                {proveedor.informacion}
              </p>
                <Button as={Link} color="primary"  href="#" variant="flat" className=" w-1/2 active:scale-95 hover:scale-105 mt-5 shadow-xl rounded-lg py-2 px-10 text-white transition duration-500 bg-[#092A3A]">
                  <h3>Visitar</h3>
                </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center ml-20">
          {proveedoresDerecha.map((proveedor, index) => (
            <div key={index} className="mb-8 flex flex-col items-center h-[32rem]">
              <h3 className="text-2xl text-gray-800 mb-2">
                {proveedor.nombre}
              </h3>
              <Image
                width={200}
                height={200}
                src={proveedor.imagen}
                radius="none"
              />
              <p className="mt-4 text-gray-800 text-left max-w-md text-justify">
                {proveedor.informacion}
              </p>
              {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">
                Visitar
              </button> */}
                <Button as={Link} color="primary"  href="#" variant="flat" className=" w-1/2 active:scale-95 hover:scale-105 mt-5 shadow-xl rounded-lg py-2 px-10 text-white transition duration-500 bg-[#092A3A]">
                  <h3>Visitar</h3>
                </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proveedores;
