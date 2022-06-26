//import { useContext } from "react"
import ButtonCount from "../ButtonCount/ButtonCount"
import { useCartContext } from "../Context/cartContext"
//import { CartContext } from "../Context/cartContext"
//import Intercambiabilidad from "../intercambiabilidad/Intercambiabilidad"

const ItemDetail = ({productos}) => {

    const {cart, addToCart} = useCartContext ()

    const onAdd = (cant) => {
        console.log(cant)
        addToCart({ ...productos, cantidad: cant })
    }

    console.log(cart)

        
    
    return (
        <>
            <div>
                {productos.map(producto=>
                    <div key={producto.id}>
                        <img src={producto.image}/>
                        <h2>{producto.marca} {producto.nombre}</h2>
                        <h3>$ {producto.precio}</h3>
                        <p>{producto.description}</p>
                    </div>
                )}  
            </div> 
            <div>
                <ButtonCount initial={1} stock={10} onAdd={onAdd}/>
               {/* <Intercambiabilidad onAdd={onAdd}/> */}
            </div>
        </>   
            
        )
       
    }
export default ItemDetail