import { Card } from "react-bootstrap"

const Filters = () => {
    return (
    <>
    {/* <Card className="mx-auto" border="warning" style={{ width: '40rem', margin:'20px'}}>
            <Card.Header>
                <Row >
                    <Col>
                        orden
                    </Col>
                    <Col>
                        filtro
                    </Col>
                </Row>
            </Card.Header>
            <Form >
            <Row style={{margin:'10px'}}>
                <Col>
                    <Form.Select onChange={(e) => setProdOrder(e.target.value)} name='order' value={prodOrder}>
                        <option>seleccionar</option>
                        <option>precio: mas bajo primero</option>
                        <option>precio: mas alto primero</option>
                        <option>alfabetico</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select name='filter' onChange={(e) => setProdFilter(e.target.value)} value={prodFilter}>
                        <option>seleccionar</option>
                        <option>perros</option>
                        <option>gatos</option>
                        <option>+ de $1000</option>
                        <option>- de $1000</option>
                    </Form.Select>
                </Col>
            </Row>
            <button className="btn-outline-light" type="submit" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", maxWidth:"200px", color: "white", margin:"5px", outlineColor:"white" }}>Aplicar</button>
            </Form>
        </Card> */}
    </>
    )
}

export default Filters