import { useCartContext } from "../../context/CartContext"



const Cart = () => {
   
    const {cartList, vaciarCarrito, eliminarItem} = useCartContext()

    

    return (
        <>
            <h1>CARRITO</h1>
            <ul>
                {cartList.map( item => (
                    <li key={item.id}>
                        {item.title} - {item.cantidad}
                        
                    </li>

                ))}

            </ul>
            <button className="btn-outline-light" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar Carrito</button>
        </>
    )
}

export default Cart