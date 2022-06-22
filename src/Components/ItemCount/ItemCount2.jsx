import { useState } from 'react'


const ItemCount2 = ({stock, initial, onAdd}) => {
    console.log(stock)
    
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
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={suma}> + </button>
                <button onClick={resta}> - </button>
                <ButtonCount/>
            </div>
        </>
    )




}


    

export default ItemCount2