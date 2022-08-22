import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, doc, getDoc } from "firebase/firestore"



export const UpdateStock = async (cartList, emptyCart) => {

   
    
        const db = getFirestore()
    
        const queryCollectionStock = collection(db, 'items') //Target collection
    
        const queryUpdateStock = query( //Filter for request
                queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) //Brings ids than match the ones in the cart
        )
    
        const batch = writeBatch(db) //Allows many actions at a time
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, { //Substracts the amount in the cart to the current stock of each item
            stock : res.data().stock - cartList.find(item => item.id === res.id).amount
        })))
        .catch(err => console.log(err))
        .finally(emptyCart()) //Resets the cart
    
        batch.commit()
    
    
    

    return (
        <></>
    )
}

export const SetOrder = (order) =>{
        
      
        const db = getFirestore()
        const queryOrders = collection(db, 'orders') //Target collection 
    
    return (addDoc(queryOrders, order))
}

export const GetProductsFirestore = (categoriaId) => {

    const db = getFirestore()
    const queryCollection = collection(db, 'items')

    const queryFilterStock = query(
        queryCollection,
        where('stock', '>', 0))
    
    const queryFilter = categoriaId ? query(
        queryFilterStock,
        where('category', '==', categoriaId)) : queryFilterStock

    return getDocs(queryFilter)
   
}

export const GetProductsId = (detailId) => {
    const db = getFirestore()
    const queryProduct = doc(db, 'items', detailId)
    

    return (getDoc(queryProduct))
}


