import { useState } from "react"
const ButtonCount = ({ handleInter, initial, stock }) => {
    
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

       
    
    return (
        <>
            <h1>Agregaras {count} items al carrito</h1>
            <button className="btn btn-danger" onClick={suma}> + </button>
            <button className="btn btn-primary" onClick={resta}> - </button>
            <button className="btn btn-outline-success" onClick={handleInter}>Agregar Al carrito</button>
        </>

    )
}

export default ButtonCount
