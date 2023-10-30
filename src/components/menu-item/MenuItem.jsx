import {Image, Input, Button} from "@nextui-org/react";
//import { useState } from "react"

export const MenuItem = ({items, onQuantityChange}) => {
    //ESTE NO ES MENU ITEM ES CART ITEM
    /*const [itemInCart, setItem] = useState([]); 

    const addItemToCart = (item, cantidad) => {
      const newItem = {
        ...item,
        count: cantidad,
      };
      setItem([
        ...itemInCart,
        newItem,
      ]);
    };*/


    return (
        <div className="py-16 px-24 font-marcellus mb-40 mx-60">
      <div className="mb-20">
          <h2 className="text-5xl text-center text-gray-800 font-medium">CARRITO</h2>
      </div>
      <div className="mt-10">
        {items.length === 0 && (
          <span>Tu carrito esta vacio</span>
        )}
        {items.map((item) => (
          <div key={item.id_items}>
            <Image
                className="w-40 h-40 object-cover"
                src={`../src/images/vista-menu/${item.imagen}`}
                radius="none"
            />
            <div>
              <h3>{item.nombre}</h3>
              <span>${item.precio * item.count}</span>
            </div>
            <Input
              placeholder="0"
              type="number"
              min="0" 
              max="1000"
              variant="bordered"
              className="w-20 mr-5"
              value={item.count} onChange={(event) => {
                onQuantityChange(item.id_items, event.target.value)
              }}/>

              
              
          </div>
        ))}
        {items.length > 0 && (
          <Button>Proceder a ordenar</Button>
        )}
      </div>
    </div>
    )
  }
  export default MenuItem