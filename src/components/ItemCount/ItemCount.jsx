import { useState } from "react"
import { Card, ButtonGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

const ItemCount = ({inicial = 1, stock = 10, onAdd} ) => {
    
    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if (count<stock) {
            setCount(count + 1)
        }
        else {
            alert(`No hay stock suficiente, el stock actual es: ${stock}`)
        }
        
    }

    const handleRemove = () => {
        if (count>inicial){
            setCount(count - 1)
        }
        
    }

    const handleAddToCart = () => {
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