/*import { getFetch } from "../../helpers/getFetch"

const ItemDetail = () => {
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
            <div>
              {productos.map(producto=>
                <div key={producto.id}>
                    <h1>{producto.description}</h1>
                </div>
                )}  
            </div>
        </>   
            
        )
       
    }
export default ItemDetail*/