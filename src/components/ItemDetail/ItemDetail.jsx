import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import {  useCartContext } from '../../context/CartContext';



const ItemDetail = ({item}) => {
    const [agregado, setAgregado] = useState(false)
    const [cantItem, setCantItem] = useState(0)

    const {agregarCarrito, cartList} = useCartContext()

    const onAdd = (amount) => {
        console.log(`Amount of elements added: ${amount}`) 
        setCantItem(amount)
        setAgregado(true)
       
        agregarCarrito({...item, cantidad: amount})
        
        
    }
    console.log(cartList)
    return (
        <>
        <Container>
            <Card className="text-center mx-auto" style={{ width: '40rem' }}>
                <Row>
                    <Col>
                        <img src={item.pictureUrl} width="330" height="330" style={{ margin: '8px' }}/>
                    </Col>
                    <Col style={{ marginRight: '20px' }}>

                        <br/><CardHeader >{item.title}</CardHeader>

                        <br/><div>{item.description}</div>

                        <div style={{ marginTop: '5px' }}>{`Precio: ${item.price}`}</div>

                        <br/><ItemCount inicial={1} agregado={agregado} stock={item.stock} onAdd={onAdd} />
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    )

}
export default ItemDetail