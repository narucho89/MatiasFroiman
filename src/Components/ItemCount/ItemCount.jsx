import { useState } from 'react';




function ItemCount () { 
     const [stock, inicial ] = useState (1)

    console.log(stock)

    if ((stock >1) && (stock <10 )) {
        function sumar(){
            inicial (stock + 1) 
        }

        function resta(){
            inicial (stock - 1) 
        }

        function agregar(){
            console.log(stock)
        }

        return (
            <>
                <div>
                    <h2>la cantidad en stock es {stock}</h2>
                    <button onClick={sumar}>+</button>
                    <button onClick={resta}>-</button>
                    <button onClick={agregar}>Agregar</button>
                    
                </div>
            </>
        )
    }else if (stock<=1){
        function sumar(){
            inicial (stock + 1) 
        }
        function agregar(){
            console.log(stock)
        }



        return (
            <>
                <div>
                    <h2>No puedes agregar menos {stock}</h2>
                    <button onClick={sumar}>+</button>
                    <button onClick={agregar}>Agregar</button>
                </div>
            </>
        )

    }else if (stock>=10){
        function resta(){
            inicial (stock - 1) 
        }

        function agregar(){
            console.log(stock)
        }

        return (
            <>
                <div>
                    <h2>Ya alcanzaste la cantidad maxima de stock {stock}</h2>
                    <button onClick={resta}>-</button>
                    <button onClick={agregar}>Agregar</button>
                    
                </div>
            </>
        )

    }

 
}



export default ItemCount