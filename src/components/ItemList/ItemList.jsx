import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';



const ItemList = ({productos}) => {
    
    return (
        <>
        <Container>
            <Row>
                {productos?.map(producto => <Item key={producto.id} prods={producto} />)}
            </Row>
        </Container>
        </>
        
        
)
}

export default ItemList