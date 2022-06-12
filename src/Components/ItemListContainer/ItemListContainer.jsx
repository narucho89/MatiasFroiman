import ItemList from "../ItemList/ItemList"

function ItemListContainer (props) {
    const {greeting} = props
        return (
                <>
                <h1>{greeting}</h1>
                <ItemList/>
                </>
    )

}

export default ItemListContainer