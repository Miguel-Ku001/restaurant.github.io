import {Image, Input, Button, Card, CardBody, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import React, { useState } from "react"
import {MdDeleteOutline} from "react-icons/md";
import axios from "axios";
import {AiOutlineShoppingCart} from "react-icons/ai";

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
  //console.log(items);



  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/registrar-venta', items)
    .then(res => {
        console.log(res);
        localStorage.removeItem('shopping-cart');
        window.location.reload()
    }).catch(err => console.log(err));
  }

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    return (
      <div className="px-24 font-marcellus mx-60">
        <div className="flex flex-row-reverse justify-center">
          <div className="w-1/5">
            <Button color="primary"  onPress={onOpen} variant="flat" className="w-full active:scale-95 hover:scale-105 shadow-xl rounded-lg px-10 text-white transition duration-500 bg-[#092A3A]">
              <AiOutlineShoppingCart color="white" size="1.5em"/> 
              <h3>Ver carrito</h3>
            </Button>
          </div>
        </div>
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
                <ModalHeader className="">Carrito de compras</ModalHeader>
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
                                min="0" 
                                max="1000"
                                variant="bordered"
                                className="w-20"
                                value={item.count} onChange={(event) => {
                                  onQuantityChange(item.id_items, event.target.value)
                                }}/>
                              </div>
                            </div>
                            <Tooltip content="Eliminar del carrito" color="danger">
                              <Button onClick={() => onItemRemove(item)} isIconOnly variant="faded">
                                <MdDeleteOutline color="red" size="1.5em"/>
                              </Button>
                            </Tooltip>

                          </div>
                        </CardBody>
                      </Card>
                        
                    </div>
                  ))}
                </ModalBody>
                <ModalFooter>
                  {items.length > 0 && (
                    <div className="space-x-4">
                      <Button onPress={onClose} className="bg-[#28a332] text-white">Seguir comprando</Button>
                      <Button onClick={handleSubmit} className="bg-[#092A3A] text-white">Finalizar compra</Button>
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