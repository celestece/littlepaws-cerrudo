import { useState } from "react";
import { useEffect } from "react";
import { getItem } from "../data/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(()=> {
        getItem(1)
        .then(respuesta => setItem(respuesta))
        .catch(err => console.log(err))
        .finally(()=> console.log('finally'))
    }, [])
    {console.log(item)}
    return (
        <>
            <br/>
            <ItemDetail  item={item}/>
        </>
    )

}
export default ItemDetailContainer