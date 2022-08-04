
import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const eliminarItem = (id) => setCartList(cartList.filter(prod => prod.id !== id));

    const vaciarCarrito = () => {
        setCartList([])
    }

    const isInCart = (id) => cartList.some(prod => prod.id === id)

    const agregarCarrito = (prod) => {
        console.log(prod.id)
        if (isInCart(prod.id)){
           
            for (const item in cartList){
                if (cartList[item].id === prod.id) {
                    cartList[item].cantidad += prod.cantidad
                }
            }
        }
        else {
            setCartList([...cartList, prod])
        }
        



        // if (isInCart(prod.id)){
        //     const nuevoCart = cartList.map(item => {if (item.id == prod.id){
        //         item.cantidad += prod.cantidad
        //     }})
        //     setCartList(nuevoCart)

        //     // for (const item in cartList){
        //     //     if (cartList[item].id === prod.id) {
        //     //         cartList[item].cantidad += prod.cantidad
        //     //     }
        //     // }
        // }
        // else {
        //     setCartList([...cartList, prod])
        // }
       

        // if (isInCart(prod.id)){
        //     const newCart  = cartList.map(item => {if (item.id === id){
        //         return {...item, cantidad: item.cantidad + cantidad}
        //     }})
        //     setCartList(newCart)
        // }
        // else {
        //     setCartList([...cartList, prod])
        // }

        
    }

    return (

        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            isInCart,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}



