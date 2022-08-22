import { useState } from "react"
import React from 'react';
import { Card, ButtonGroup } from "react-bootstrap"

const ItemCount = ({initial = 1, stock = 10, onAdd} ) => { //Destructuring of props, initializig default values
    
    const [count, setCount] = useState(1) //State for count value. 1 by default

    const handleAdd = () => { //Count addition handler
        //Ternary operator for checking the stock. It will add only if count is less than the current stock
        count < stock ? setCount(count + 1) : alert(`No hay stock suficiente, el stock actual es: ${stock}`)
        
    }

    const handleRemove = () => { //Count substraction handler
        if (count>initial){ //If count is at 1, it wont substract anymore
            setCount(count - 1)
        }
        
    }

    const handleAddToCart = () => { //Handler for adding item to cart. Pass current count state as parameter
        onAdd(count)
    }

    return (
        <>
                <style type="text/css">
                {`
            .btn-count {
                background-color: #FF9F50;
                color: white;
                font-weight: bold;
                border-color: #EF5C18;
            }

            .btn-carrito {
                background-color: #EF5C18;
                color: white;
            }
            .btn-count:hover {
                color: red;
            }
            .btn-carrito:hover {
                color: #FDCC9B;
            }
            `}

            </style>

            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                <Card.Header>
                    <label>{count}</label>
                </Card.Header>
                <ButtonGroup >
                    <button className="btn btn-count btn-lg" onClick={handleRemove}> - </button>
                    <button className="btn btn-count btn-lg" onClick={handleAdd}> + </button>
                </ButtonGroup>
                
                
                 <button className="btn btn-carrito btn-sm" onClick={handleAddToCart}>Agregar al carrito</button>
                
                
                
            </Card>
        </>
    )

}
export default ItemCount