import { useEffect, useState } from "react";
import {Link, Button, Image, Input} from "@nextui-org/react";
import MenuItem from '/src/components/menu-item/MenuItem'
import axios, { all } from "axios";

export const Menu = () => {

  const [item, setItem] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  useEffect(()=> {
      axios.get('/api/items')
      .then(res => {
        setItem(res.data);
        setFilteredItems(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const filterCategory = (category) => {
    if (category === 0) {
      setFilterActive(false);
      setFilteredItems(item);
    } else {
      const filteredData = item.filter(data => data.idcategoria === category);
      setFilterActive(true);
      setFilteredItems(filteredData)
    }
    
  }





  const [itemsInCart, setItemsInCart] = useState([]); 
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const addItemToCart = (item) => {
    const newItem = {
      ...item,
      count: 1,
    };
    setItemsInCart([
      ...itemsInCart,
      newItem,
    ]);



    setNotificationMessage('¡Agregado al carrito!');
    setNotificationVisible(true);
    // Ocultar la notificación después de un tiempo (ejemplo: 2 segundos)
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
  };

  const onQuantityChange = (itemId, count) => {
    setItemsInCart((oldState) => {
      const itemsIndex = 
        oldState.findIndex(
          (data) => 
          data.id_items === itemId
        );
      if(itemsIndex !== -1) {
        oldState[itemsIndex].count = count;
      }
      return [...oldState];
    });
  };



  return (
    <div className="py-16 mr-36 font-marcellus">
      <MenuItem items={itemsInCart} onQuantityChange={onQuantityChange}/>
      <div className="mb-20">
          <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
      </div>

      <div className="flex justify-center mb-10">
        
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(0)}> Todos </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(1)}> Comidas </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(2)}> Bebidas </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(3)}> Postres </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(4)}> Paquetes </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-2 mb-12">
        {filteredItems.map((data, i) => (
          <div key={data.id_items} className="flex flex-row justify-between w-full mb-5">
          <div className="flex flex-col items-end p-4 w-1/2">
          <Image
              className="w-40 h-40 object-cover"
              src={`../src/images/vista-menu/${data.imagen}`}
              radius="none"
          />
          </div>

          <div className="flex flex-col items-left p-4 w-4/5">
          <div className="h-4/6">
              <h3 className="text-2xl text-gray-800 text-left uppercase">
                  {data.nombre}
              </h3>
              <p className="mb-2 text-justify text-gray-800">
                  {data.descripcion}
              </p>
              <p>
                  Precio: ${data.precio}
              </p>
          </div>
          <div className="h-2/6 flex justify-end">
                  <Button variant="flat" className=" active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 text-white transition duration-500 bg-[#28a332]"
                      onClick={() => addItemToCart(data)}>
                    <h3>Agregar al carrito we</h3>
                  </Button>
          </div>
          </div>
      </div>

        ))}
      </div>
      
      <div className={`fixed top-10 right-4 p-2 bg-green-500 text-white rounded shadow-lg transform transition-opacity duration-300
                       sm:top-16 sm:right-6 sm:p-3 sm:text-base ${isNotificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {notificationMessage}
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