import { useState } from 'react';




function ItemCount () {
    const [count, setCantidad ] = useState (1)

    if ((count >1) && (count <10 )) {
        function sumar(){
            setCantidad (count + 1) 
        }

        function resta(){
            setCantidad (count - 1) 
        }

        function agregar(){
            console.log(count)
        }

        return (
            <>
                <div>
                    <h2>la cantidad en stock es {count}</h2>
                    <button onClick={sumar}>+</button>
                    <button onClick={resta}>-</button>
                    <button onClick={agregar}>Agregar</button>
                    
                </div>
            </>
        )
    }else if (count<=1){
        function sumar(){
            setCantidad (count + 1) 
        }
        function agregar(){
            console.log(count)
        }



        return (
            <>
                <div>
                    <h2>No puedes agregar menos {count}</h2>
                    <button onClick={sumar}>+</button>
                    <button onClick={agregar}>Agregar</button>
                </div>
            </>
        )

    }else if (count>=10){
        function resta(){
            setCantidad (count - 1) 
        }

        function agregar(){
            console.log(count)
        }

        return (
            <>
                <div>
                    <h2>Ya alcanzaste la cantidad maxima de stock {count}</h2>
                    <button onClick={resta}>-</button>
                    <button onClick={agregar}>Agregar</button>
                    
                </div>
            </>
        )

    }

}



export default ItemCount