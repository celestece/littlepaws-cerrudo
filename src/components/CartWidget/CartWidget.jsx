import cartIcon from '../assets/cartIcon.png';
import React from 'react';
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {cantidadTotal} = useCartContext()
 
    
    return (
        <>
            <img src={cartIcon} width="40" height="40" />{cantidadTotal() !== 0 && <span style={{ fontSize: "25px" }}> {cantidadTotal()}</span>}

        </>
        
    )

}
export default CartWidget