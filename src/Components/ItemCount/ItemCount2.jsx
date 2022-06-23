import { useState } from 'react'



const ItemCount2 = ({stock, initial, handleInter}) => {
        
    const [count, setCount] = useState(initial)

    function suma () {
        if (count < stock){
            setCount (count + 1)
        }
    }

    function resta() {
        if (count > 0){
            setCount(count - 1)
        }
    }

 //   function handleInter () {
        
  //  }


    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={suma}> + </button>
                <button onClick={resta}> - </button>
                <button onClick={handleInter}>Agregar al Carrito</button>
            </div>
        </>
    )




}


    

export default ItemCount2