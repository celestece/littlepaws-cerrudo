import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { promProductos } from "../data/data";
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import kittyLoad from '../assets/kittyLoad.gif';


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    const onAdd = (amount) => {
        console.log(`Amount of elements added: ${amount}`) 
    }

    

    useEffect(()=> {
        if (categoriaId) {
                promProductos
            .then(respuesta => setProductos(respuesta.filter(prod => prod.category === categoriaId)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
        else {
            promProductos
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
        
    }, [categoriaId])

    return (
        <>
            { greeting }
            <br/><br/>
            {loading ? <img src={kittyLoad} style={{ maxWidth: '200px' }}></img>
            
            : <ItemList productos={productos}/>
            }
            
            
            <br/><br/>
            <ItemCount inicial={1} stock={5} onAdd={onAdd} />
        </>
    )
    
}

export default ItemListContainer