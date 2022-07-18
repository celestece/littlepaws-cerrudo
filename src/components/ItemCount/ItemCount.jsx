import { useState } from "react"
import { Card, ButtonGroup } from "react-bootstrap"

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
        if (count>1){
            setCount(count - 1)
        }
        
    }

    const handleAddToCart = () => {
        onAdd(count)
    }

    return (
        <>
            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                <Card.Header>
                    <label>{count}</label>
                </Card.Header>
                <ButtonGroup >
                    <button className="btn btn-outline-secondary btn-lg" onClick={handleRemove}> - </button>
                    <button className="btn btn-outline-primary btn-lg" onClick={handleAdd}> + </button>
                </ButtonGroup>
                <button className="btn btn-outline-success btn-sm" onClick={handleAddToCart}>Agregar al carrito</button>
            </Card>
        </>
    )

}
export default ItemCount