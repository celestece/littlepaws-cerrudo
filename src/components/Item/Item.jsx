import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';

const Item = ({prods}) => {
    {console.log(prods)}
    return (
        <>
        <Col>
            <Card  className="text-center mx-auto" style={{ width: '10rem' }}>
                <img src={prods.pictureUrl} style={{ margin: '3px' }}/>
                <CardHeader>{prods.title}</CardHeader>
                <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Ver Detalles</button>
            </Card>
        </Col>
        
        </>
    )
}

export default Item