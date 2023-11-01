import React, { useEffect, useState } from "react";
import { Link, Button, Image } from "@nextui-org/react";
import CartItem from '/src/components/cart-item/CartItem'
import axios, { all } from "axios";

export const Menu = () => {

  const [item, setItem] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  useEffect(() => {
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





  const [itemsInCart, setItemsInCart] = useState(JSON.parse(localStorage.getItem('shopping-cart')) || []);
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(itemsInCart))
  }, [itemsInCart]);
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
      if (itemsIndex !== -1) {
        oldState[itemsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onItemRemove = (item) => {
    setItemsInCart((oldState) => {
      const itemsIndex =
        oldState.findIndex(
          (data) =>
            data.id_items === item.id_items
        );
      if (itemsIndex !== -1) {
        oldState.splice(itemsIndex, 1);
      }
      return [...oldState];
    });
  };


  return (
    <div className="py-16 px-24 font-marcellus">
      <div className="mb-10">
        <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
      </div>

      <CartItem items={itemsInCart} onQuantityChange={onQuantityChange} onItemRemove={onItemRemove} />

      <div className="flex justify-center mb-10">
        <Button variant="bordered" className="border-orange-300 mx-4 text-gray-900 w-24 px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(0)}> TODOS </Button>
        <Button variant="bordered" className="border-orange-300 mx-4 text-gray-900 w-24 px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(1)}> COMIDAS </Button>
        <Button variant="bordered" className="border-orange-300 mx-4 text-gray-900 w-24 px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(2)}> BEBIDAS </Button>
        <Button variant="bordered" className="border-orange-300 mx-4 text-gray-900 w-24 px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(3)}> POSTRES </Button>
        <Button variant="bordered" className="border-orange-300 mx-4 text-gray-900 w-24 px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(4)}> PAQUETES </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 mb-12">
        {filteredItems.map((data, i) => (
          <div key={data.id_items} className="flex flex-row justify-between w-full mb-5">
            <div className="flex flex-col items-end p-4">
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
                <Button variant="flat" className=" active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-6 text-white transition duration-500 bg-[#092A3A]"
                  onClick={() => addItemToCart(data)}>
                  <h3>Agregar al carrito</h3>
                </Button>
              </div>
            </div>
          </div>

        ))}
      </div>

      <div className={`fixed z-1 top-10 right-4 p-2 bg-green-500 text-white rounded shadow-lg transform transition-opacity duration-300
                       sm:top-16 sm:right-6 sm:p-3 sm:text-base ${isNotificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {notificationMessage}
      </div>




    </div>
  )
}
export default Menu