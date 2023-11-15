import { Image, Input, Button, Card, CardBody, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react"
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ items, onQuantityChange, onItemRemove }) => {
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
  //console.log(items);
  const isLoggedIn = localStorage.getItem('auth') === 'yes';
  
  const navigate = useNavigate();
  const idusuario = localStorage.getItem('idusuario');

  function handleSubmit(event) {
    event.preventDefault();

    const infoEnviar = {
      idusuario: idusuario,
      items: items
    }

    axios.post('/api/payment-checkout', infoEnviar)
      .then(res => {
        console.log(res);
        //localStorage.removeItem('shopping-cart');
        //window.location.reload()
        //navigate("/orden");
        if(res.data.url) {
          window.location.href = res.data.url;
        }
      }).catch(err => console.log(err));
  }

  

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");


  const [total, setTotal] = useState(0);

  /*const calcularTotal = () => {
    let precioTotal = 0;
    items.forEach((items) => {
      precioTotal += (items.precio * items.count);
    });
    return setTotal(precioTotal);
  }*/

  /*useEffect(() => {
    const itemsCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if (itemsCart) {
      setItemsInCart(itemsCart);
      calcularTotal();
    }
  }, [])*/

  useEffect(() => {
    const precioTotal = items.reduce((total, items) => {
      return total + items.precio * items.count;
    }, 0);
    setTotal(precioTotal);
    localStorage.setItem('total-price', JSON.stringify(precioTotal));
  }, [items])


  return (
    <div className="font-marcellus">
      {isLoggedIn && (
        <div className="flex flex-row-reverse justify-center">
          <div className="">
            <Button color="primary" onPress={onOpen} variant="bordered" className="border-orange-300 text-gray-900 w-full active:scale-95 hover:scale-105 shadow-xl rounded-lg transition duration-500">
              <AiOutlineShoppingCart color="gray" size="1.5em" />
              <h3>VER CARRITO</h3>
            </Button>
          </div>
        </div>
      )}
      <div className="mt-10">
        <Modal
          isOpen={isOpen}
          placement={modalPlacement}
          onOpenChange={onOpenChange}
          scrollBehavior={scrollBehavior}
          size="2xl"
        >
          <ModalContent>
            {(onClose) => (<>
              <ModalHeader className="">CARRITO DE COMPRAS</ModalHeader>
              <ModalBody>
                {items.length === 0 && (
                  <span>Tu carrito esta vacio</span>
                )}
                {items.map((item, i) => (
                  <div key={i}>
                    <Card
                      isBlurred
                      className="mx-auto w-96 my-0.5 border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                      shadow="sm"
                    >
                      <CardBody>
                        <div className="flex items-center">
                          <Image
                            className="w-20 h-20 object-cover rounded-md"
                            src={`../src/images/vista-menu/${item.imagen}`}
                            radius="none"
                          />
                          <div className="mx-5">
                            <h3>{item.nombre}</h3>
                            <span>Precio: ${item.precio * item.count}</span>
                            <div className="flex items-center">
                              <span className="mr-4">Cantidad:</span>
                              <Input
                                placeholder="0"
                                type="number"
                                min="1"
                                max="1000"
                                variant="bordered"
                                className="w-20"
                                value={item.count} onChange={(event) => {
                                  onQuantityChange(item.id_items, event.target.value)
                                }} />
                            </div>
                          </div>
                          <Tooltip content="Eliminar del carrito" color="danger">
                            <Button className="bg-transparent" onClick={() => onItemRemove(item)} isIconOnly variant="faded">
                              <MdDeleteOutline color="red" size="1.5em" />
                            </Button>
                          </Tooltip>
                        </div>
                      </CardBody>
                    </Card>

                  </div>
                ))}
              </ModalBody>
              <ModalFooter className="mr-5 mb-2">
                {items.length > 0 && (
                  <div>
                    <div className="h-10 mb-4 flex justify-end border-t-1 pt-1.5">
                      <span><b className="text-gray-500"> Total a pagar: ${total}</b></span>
                    </div>
                    <div className="space-x-4">
                      <Button onPress={onClose} className="bg-tranparent font-semibold text-red-400 active:scale-95 hover:scale-105 shadow-xl border transition duration-500">Seguir comprando</Button>
                      <Button onClick={handleSubmit} className="bg-[#092A3A] text-white active:scale-95 hover:scale-105 shadow-xl border transition duration-500">Realizar orden</Button>
                    </div>
                  </div>
                )}
              </ModalFooter>
            </>)}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}
export default CartItem