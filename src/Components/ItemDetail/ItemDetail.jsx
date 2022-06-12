
const ItemDetail = ({productos}) => {
    

 return (
        <>
            <div>
                {productos.map(producto=>
                    <div key={producto.id}>
                        <img src={producto.image}/>
                        <h2>{producto.marca} {producto.nombre}</h2>
                        <h3>$ {producto.precio}</h3>
                        <p>{producto.description}</p>
                    </div>
                )}  
            </div>
        </>   
            
        )
       
    }
export default ItemDetail