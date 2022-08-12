import cartIcon from '../assets/cartIcon.png';
import React from 'react';
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {cantidadTotal} = useCartContext()
 
    
    return (
        <>
            <img src={cartIcon} width="35" height="35" />{cantidadTotal() !== 0 && <span>{cantidadTotal()}</span>}

        </>
        
    )

}
export default CartWidget