import React, { useState } from 'react';

function  ItemCount2 (props) {
    const [initial, setStock, onAdd] = useState(props.initial)
    
   
    if ((initial >1) && (initial <10 )) {
        return (
            <>
                <div>
                    <h2>la cantidad seleccionada es {initial}</h2>
                    <button onClick={() => setStock(initial + 1)}>+</button>
                    <button onClick={() => setStock(initial - 1)}>-</button>
                    <button onClick={() => (console.log(initial))}>Agregar</button>
                </div>
            </>
        )

    }else if (initial<=1){
        return (
            <>
                <div>
                    <h2>la cantidad seleccionada es {initial}</h2>
                    <button onClick={() => setStock(initial + 1)}>+</button>
                    <button onClick={() => (console.log(initial))}>Agregar</button>
                </div>
            </>
        )
    }else if (initial>=10) {        
        return (
            <>
                <div>
                    <h2>la cantidad seleccionada es {initial}</h2>
                    <button onClick={() => setStock(initial - 1)}>-</button>
                    <button onClick={() => (console.log(initial))}>Agregar</button>
                    
                </div>
            </>
        )

    }

  
    
}

    

export default ItemCount2