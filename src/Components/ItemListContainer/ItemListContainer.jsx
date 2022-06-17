import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useState } from "react";

function ItemListContainer(props) {
    const [productos, setProductos] = useState([])
    const { greeting } = props
    const { categoria } = useParams()
    useEffect(() => {
        if (categoria) {

            getFetch()
                .then((resp) => { setProductos(resp.filter(producto => producto.categoria === categoria)) })
                .catch(err => console.log(err))
                .finally(() => console.log())

        } else {

            getFetch()
                .then((resp) => {
                    setProductos(resp)
                })
                .catch(err => console.log(err))
                .finally(() => console.log())
        }
    }, [categoria])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer