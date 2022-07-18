import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    console.log(greeting)

    const onAdd = (amount) => {
        console.log(`Amount of elements added: ${amount}`) 
    }

    return (
        <>
            { greeting }
            <br/><br/>
            <ItemCount inicial={1} stock={2} onAdd={onAdd} />
        </>
    )
    
}

export default ItemListContainer