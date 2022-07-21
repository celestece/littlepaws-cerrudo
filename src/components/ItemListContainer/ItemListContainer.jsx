import { useState } from "react";
import { useEffect } from "react";
import { promProductos } from "../data/data";
import ItemCount from "../ItemCount/ItemCount"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])

    const onAdd = (amount) => {
        console.log(`Amount of elements added: ${amount}`) 
    }

    

    useEffect(()=> {
        promProductos
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(()=> console.log('finally'))
    }, [])

    return (
        <>
            { greeting }
            <br/><br/>

            <ItemList productos={productos}/>
            
            <br/><br/>
            <ItemCount inicial={1} stock={2} onAdd={onAdd} />
        </>
    )
    
}

export default ItemListContainer