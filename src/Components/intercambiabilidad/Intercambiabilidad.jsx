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

            {
                inputType === 'Button' ? 
                <ButtonCount handleInter={handleInter}/>
                :
                <InputCount />
    }


        </div>
    )

}

export default Intercambiabilidad