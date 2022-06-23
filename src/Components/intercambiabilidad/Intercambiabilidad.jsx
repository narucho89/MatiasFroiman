import { useState } from "react"
import ButtonCount from "../ButtonCount/ButtonCount"
import InputCount from "../inputCount/inputCount"


const Intercambiabilidad = () => {
    const [inputType, setImputType] = useState ('button')

    const handleInter = () => {
        setImputType ('imput')
    }

    return (
        <div>
            <h2>Item Description</h2>

            {inputType === 'button'?
            <ButtonCount handleInter={handleInter} stock={10} initial={1}/>
            :
            <InputCount />}
        </div>
    )

}

export default Intercambiabilidad