import Item from '../Item/Item'
import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";



function ItemList() {
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
   <Item productos={productos}/>
  </>
)
}

export default ItemList