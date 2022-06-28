import { createContext, useState, useContext } from "react"

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)


export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
        
    const addToCart = (item) => {
        setCart([
            cart,
            item
        ])
    
    }

  //  const isInCart = (id) => {
  //      return cart&&cart.some((i)=>i.item.id === id)       
  //  }

        
    return (
        <CartContext.Provider 
        value={{
            cart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    ) 


}