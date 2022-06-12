import ItemList from "../ItemList/ItemList"
import Item from '../Item/Item'

function ItemListContainer (props) {
    const {greeting} = props
        return (
                <>
                <h1>{greeting}</h1>
                <ItemList>
                    <Item/>
                </ItemList>
                </>
    )

}

export default ItemListContainer