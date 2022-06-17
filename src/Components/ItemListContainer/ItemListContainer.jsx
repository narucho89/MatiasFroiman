import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getFetch } from "../../helpers/getFetch";
import { useState } from "react";

function ItemListContainer (props,) {
const [productos, setProductos] = useState([])

const {categoriaId} = useParams()

useEffect (()=>{
    if (categoriaId) {
        
            getFetch()
            .then((resp)=> {setProductos(resp.filter(producto => producto.categoriaId === categoriaId))})
            .catch(err => console.log(err))
            
        }else {
       
            getFetch()
            .then((resp)=> {
                setProductos(resp)
            })
            .catch(err => console.log(err))
        }

    //.finally(()=> console.log() )


},[])



    const {greeting} = props
        return (
                <>
                <h1>{greeting}</h1>
                <ItemList productos={productos}/>
                </>
    )

}

export default ItemListContainer