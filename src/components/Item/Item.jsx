import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const Item = ({prods}) => {
    {console.log(prods)}
    return (
        <>
            <Card  className="text-center mx-auto" style={{ width: '10rem' }}>
                <CardHeader>{prods.title}</CardHeader>
                <img src={prods.pictureUrl} width="35" height="35"/>
            </Card>
        
        
        </>
    )
}

export default Item