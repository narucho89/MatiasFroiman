import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
        const [productos, setProductos] = useState([])

        const {id} = useParams ()
      
        useEffect(()=>{ 
            getFetch()
            .then((resp)=> {setProductos(resp.filter(producto => producto.id === id))})
            .catch(err => console.log(err))
            .finally(()=> console.log() )
            
        },[])




    return (
        <>
        <ItemDetail productos={productos}/>
        </>

    )
}

export default ItemDetailContainer