import { Card, Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React, { useState } from 'react';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";



const Cart = () => {
   
    const {cartList, vaciarCarrito, eliminarItem, precioTotal} = useCartContext()
    const [orderId, setOrderId] = useState('')

    const saveOrder = async (e) => {
        e.preventDefault()

        const order = {}
        order.buyer = {email:'celestecerrudo@gmail.com', name:'celeste', phone:'6646356'}
        order.items = cartList.map(prod => {
            return {
                product: prod.title,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date()
        order.total = precioTotal()
        console.log(order)

        const db = getFirestore()
        const queryOrders = collection(db, 'orders') //Target collection
        addDoc(queryOrders, order) //Adds document with the order information 
        .then(resp => setOrderId(resp.id)) //Sets state to use later

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
        .finally(vaciarCarrito())

        batch.commit()

    }

    

    return (
        <>
            {orderId !== '' && <div>{`Su numero de orden es ${orderId}`}</div> }
            {cartList.length == 0 ? 

            

            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
            <CardHeader>No tenes nada en tu carrito aun</CardHeader>
            <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}><Link to="/" style={{  color: "white" }}>Ir a comprar</Link></button>
            </Card>
            
            :
            <div>
                <h1>CARRITO</h1>
                <ul>
                    {cartList.map( item => (
                        <div key={item.id}>
                            
                            <Card className="text-center mx-auto" style={{ width: '40rem' }}>
                                <Row>
                                <Col>
                                    <img src={item.pictureUrl} width="230" height="230" style={{ margin: '8px' }}/>
                                </Col>
                                <Col style={{ marginRight: '30px' }}>

                                    <br/><CardHeader >{item.title}</CardHeader>

                                    <br/>{`Cantidad: ${item.cantidad}`}

                                    <div style={{ marginTop: '5px' }}>{`Precio: ${item.price}`}</div>
                                    <br/>
                                    <button onClick={() => eliminarItem(item.id)}>Eliminar Producto</button>

                                    
                                </Col>
                                

                                </Row>
                                
                            </Card>
                            
                            
                            
                            
                            
                                    
                                
                            
                        </div>

                    ))}
                    
                </ul>
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
                    <h3>${precioTotal()}</h3>
                    <button className="btn-outline-light" onClick={saveOrder} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>CHECKOUT</button>
                </Card>
                <button className="btn-outline-light" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar Carrito</button>
                
                
            </div>
            }
            
        </>
    )
}

export default Cart