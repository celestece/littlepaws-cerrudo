import { Card, Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React, { useState } from 'react';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartList from "../CartList/CartList";
import { SetOrder, setOrder, UpdateStock, updateStock } from "../helpers/Helpers";



const Cart = () => {
   
    const {cartList, vaciarCarrito, precioTotal} = useCartContext() //Import context array and functions
    const [orderId, setOrderId] = useState('') //Order State


    const saveOrder = async (e, buyerData) => { //Save order function that creates the order information to store in Firestore
        e.preventDefault()

        const order = {} //empty order object
        order.buyer =  buyerData //buyer state set by the form

        console.log(order.buyer)

        order.items = cartList.map(prod => { //List cartList(array) products and save the properties of interest (product, id, price)
            return {
                product: prod.title,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date() //Add a date to the order
        order.total = precioTotal() //Add the total price to the order
        console.log(order)

        SetOrder(order)
        .then(resp => setOrderId(resp.id))


        
        // const db = getFirestore()
        // const queryOrders = collection(db, 'orders') //Target collection
        // addDoc(queryOrders, order) //Adds document with the order information 
        // .then(resp => setOrderId(resp.id)) //Sets state to use later

        // const queryCollectionStock = collection(db, 'items') //Target collection

        // const queryUpdateStock = query( //Filter for request
        //     queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) //Brings ids than match the ones in the cart
        // )

        // const batch = writeBatch(db) //Allows many actions at a time

        // await getDocs(queryUpdateStock)
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref, { //Substracts the amount in the cart to the current stock of each item
        //     stock : res.data().stock - cartList.find(item => item.id === res.id).cantidad
        // })))
        // .catch(err => console.log(err))
        // .finally(vaciarCarrito()) //Resets the cart

        // batch.commit()
        UpdateStock(cartList, vaciarCarrito)

    }

    

    return (
        <>  
            {/* check if orderId was generated and if so, show */}
            {orderId !== '' && 
            <div>
                <Card className="text-center mx-auto" style={{ width: '20rem' , borderRadius:"12px"}}>
                    <CardHeader style={{ backgroundColor: "#FF9F50", color: "white"}}>¡COMPRA EXITOSA!</CardHeader>
                    <Card.Text>{`Su numero de orden es ${orderId}`}</Card.Text>
                </Card>
                <br/>
            </div>
             }
            
             {/*  */}
            {cartList.length === 0 ? 

            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
            <CardHeader>No tenes nada en tu carrito aun</CardHeader>
            <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}><Link to="/" style={{  color: "white" }}>Ir a comprar</Link></button>
            </Card>
            
            :
            <div>
                <h1>CARRITO</h1>
                <CartList/>
                <br/>
                
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
                    <h3>${precioTotal()}</h3>
                </Card>
                <button className="btn-outline-light" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar Carrito</button>
                
                <CheckoutForm saveOrder={saveOrder} />
                <br/>
                <br/>
                
            </div>
            }
            
        </>
    )
}

export default Cart