import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { promProductos } from "../data/data";
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import kittyLoad from '../assets/kittyLoad.gif';
import { getDocs, getFirestore, collection, where, query } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    const onAdd = (amount) => {
        console.log(`Amount of elements added: ${amount}`) 
    }

    

    // useEffect(()=> {
    //     if (categoriaId) {
    //             promProductos
    //         .then(respuesta => setProductos(respuesta.filter(prod => prod.category === categoriaId)))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     }
    //     else {
    //         promProductos
    //         .then(respuesta => setProductos(respuesta))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     }
        
    // }, [categoriaId])

    useEffect(() => {
        if (categoriaId) {
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            const queryFiltrada = query(
                queryCollection,
                where('category', '==', categoriaId),
            )
            getDocs(queryFiltrada)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id,...prod.data()}))))
            .catch(err=> console.log(err))
            .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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
        </>
    )
    
}

export default ItemListContainer