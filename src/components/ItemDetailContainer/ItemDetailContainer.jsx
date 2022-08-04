import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { getItem } from "../data/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import kittyLoad from '../assets/kittyLoad.gif';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {detalleId} = useParams() 

    useEffect(()=> {
        getItem(detalleId)
        .then(respuesta => setItem(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    return (
        <>
            <br/>
            {loading ? <img src={kittyLoad} style={{ maxWidth: '200px' }}></img>
            
            : <ItemDetail  item={item}/>
            }
            
        </>
    )

}
export default ItemDetailContainer