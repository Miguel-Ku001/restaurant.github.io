import { createContext, useState } from "react"

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [itemInCart, setItem] = useState([]); 

    const addItemToCart = (item, cantidad) => {
      const newItem = {
        ...item,
        count: cantidad,
      };
      setItem([
        ...itemInCart,
        newItem,
      ]);
    };

    return (
        <CartContext.Provider value={{itemInCart, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
  }
  export default CartContext;