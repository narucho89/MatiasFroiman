import { useState } from 'react'

const ItemCount2 = ({stock, initial, onAdd}) => {
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

    function onAdd () {
        console.log(count)
    }


    return (
        <div>
            <h1>La cantidad iniciada es {count}</h1>
            <button onClick={suma}> + </button>
            <button onClick={resta}> - </button>
            <button onClick={onAdd}> agregar </button>
        </div>
    )




}


    

export default ItemCount2