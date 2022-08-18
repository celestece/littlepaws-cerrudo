import { useState } from "react";
import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {detalleId} = useParams() 

    useEffect(()=> {
        const db = getFirestore()
        const queryProduct = doc(db, 'items', detalleId)
        getDoc(queryProduct)
        .then(resp => setItem({id:resp.id,...resp.data()}))
        .catch(err=> console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
    return (
        <>
            <br/>
            {loading ? <Loading/>
            
            : <ItemDetail  item={item}/>
            }
            
        </>
    )

}
export default ItemDetailContainer