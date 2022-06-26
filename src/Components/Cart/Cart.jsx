import { useCartContext } from "../Context/cartContext"


const Cart = () => {
  const { cart } = useCartContext()


  return (
    <div>
      <ul>
        {
          cart.map (item => <li>{item.nombre}</li> )
        }

      </ul>


    </div>
  )
}

export default Cart