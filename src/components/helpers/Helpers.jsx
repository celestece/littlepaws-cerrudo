import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"


export const UpdateStock = async (cartList, vaciarCarrito) => {

        // const {cartList, vaciarCarrito} = useCartContext()
    
        const db = getFirestore()
    
        const queryCollectionStock = collection(db, 'items') //Target collection
    
        const queryUpdateStock = query( //Filter for request
                queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) //Brings ids than match the ones in the cart
        )
    
        const batch = writeBatch(db) //Allows many actions at a time
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, { //Substracts the amount in the cart to the current stock of each item
            stock : res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })))
        .catch(err => console.log(err))
        .finally(vaciarCarrito()) //Resets the cart
    
        batch.commit()
    
    
    

    return (
        <></>
    )
}

export const SetOrder = (order) =>{
        
      
        const db = getFirestore()
        const queryOrders = collection(db, 'orders') //Target collection
         //Adds document with the order information 
        //Sets state to use later
       
    
    return (addDoc(queryOrders, order))
}

export const GetProductsFirestore = (categoriaId, prodFilter, prodOrder) => {

    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    let condition = ''
    console.log(prodFilter)

    if (prodFilter == 'seleccionar' && prodOrder == 'seleccionar'){
        const queryFilter = categoriaId ? query(
            queryCollection,
            where('category', '==', categoriaId)) : queryCollection

            return getDocs(queryFilter)
    }
    else {

        if (prodFilter == 'perros'){
            condition = where('target', '==', 'perros')
        }
        if (prodFilter == 'gatos'){
            condition = where('target', '==', 'gatos')
        }
        if (prodFilter == '+ de $1000'){
            condition = where('price', '>', 1000)
        }
        if (prodFilter == '- de $1000'){
            condition = where('price', '<', 1000)
        }

        const queryFilter = categoriaId ? query(
            queryCollection, condition) : queryCollection

            return getDocs(queryFilter)
    }
    
    
    
    
    
}


