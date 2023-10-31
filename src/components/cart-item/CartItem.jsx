import {Image, Input, Button} from "@nextui-org/react";
//import { useState } from "react"
import {MdDeleteOutline} from "react-icons/md";
import axios from "axios";

export const CartItem = ({items, onQuantityChange, onItemRemove}) => {
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
  console.log(items);



  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/registrar-venta', items)
    .then(res => {
        console.log(res);
        localStorage.removeItem('shopping-cart');
        window.location.reload()
    }).catch(err => console.log(err));
  }


    return (
        <div className="py-16 px-24 font-marcellus mb-40 mx-60">
      <div className="mb-20">
          <h2 className="text-5xl text-center text-gray-800 font-medium">CARRITO</h2>
      </div>
      <div className="mt-10">
        {items.length === 0 && (
          <span>Tu carrito esta vacio</span>
        )}
        {items.map((item, i) => (
          <div key={i}>
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

              <Button onClick={() => onItemRemove(item)} isIconOnly variant="faded">
                <MdDeleteOutline color="red" size="1.5em"/>
              </Button>
              
          </div>
        ))}
        {items.length > 0 && (
          <div>
            <Button onClick={handleSubmit}>Finalizar compra</Button>
            <Button>Seguir comprando</Button>
          </div>
        )}
      </div>
    </div>
    )
  }
  export default CartItem