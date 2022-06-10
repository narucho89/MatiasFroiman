import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import {Card,Button} from 'react-bootstrap'







const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{ 
        getFetch().then((resp)=> {
            setProductos(resp)
           
        })
        .catch(err => console.log(err))
        .finally(()=> console.log() )
        
    },[])

    console.log(productos)


    return (
        <>
            <div>
              {productos.map(producto=>
                <div key={producto.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.image}/>
                        <Card.Body>
                        <Card.Title>{producto.marca} {producto.nombre}</Card.Title>
                            <Card.Text>$ {producto.precio}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>


              
              
              
              )}  
            </div>
        </>   
            
        )
       
    }
export default ItemList 