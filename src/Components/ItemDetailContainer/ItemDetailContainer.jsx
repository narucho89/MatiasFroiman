import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () =>{
        const [productos, setProductos] = useState([])
      
        useEffect(()=>{ 
            getFetch().then((resp)=> {
                setProductos(resp)
               
            })
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