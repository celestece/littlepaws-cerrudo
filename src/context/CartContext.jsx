
import { useState, createContext, useContext } from "react";
import React from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const eliminarItem = (id) => setCartList(cartList.filter(prod => prod.id !== id));

    const vaciarCarrito = () => {
        setCartList([])
    }

    const precioTotal = () => {
        return cartList.reduce((totalPrecio, producto) => totalPrecio = totalPrecio + (producto.price * producto.cantidad), 0)
    }

    const cantidadTotal = () => {
        return cartList.reduce((totalCantidad, producto) => totalCantidad += producto.cantidad, 0)
    }

    const isInCart = (id) => cartList.some(prod => prod.id === id)

    const agregarCarrito = (prod) => {
        const idx = cartList.findIndex(product => product.id === prod.id)
        if (idx !== -1){
            cartList[idx].cantidad += prod.cantidad
            setCartList([...cartList])
        }
        else {
            setCartList([...cartList, prod])
        }

    }

    return (

        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            isInCart,
            eliminarItem,
            precioTotal,
            cantidadTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}



