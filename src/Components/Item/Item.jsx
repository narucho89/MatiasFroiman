import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({productos}) => {

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
                            <Link to={`/detalle/${producto.id}`}>
                                <Button variant="primary">Detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                )}  
            </div>
        </>   
            
        )
       
    }


export default Item