import Item from "../Item/Item"


const ItemList = ({productos}) => {
    
    return (
        <>
            {productos?.map(producto => <Item key={producto.id} prods={producto} />)}
        </>
        
        
)
}

export default ItemList