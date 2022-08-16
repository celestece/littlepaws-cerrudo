import { FloatingLabel, Form, Row, Col, Card } from "react-bootstrap"

const CheckoutForm = ({saveOrder}) => {
    return (
    <>
    <Card className="mx-auto" style={{ width: '40rem', margin:'20px'}}>
        <Form onSubmit={saveOrder} style={{ margin:'20px'}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                <FloatingLabel controlId="floatingInput" label="Primer Nombre">
                    <Form.Control type="text" required placeholder="Juan Garcia"/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupPhone">
                <FloatingLabel controlId="floatingInput" label="Numero Telefonico">
                    <Form.Control type="tel" required placeholder="+54 3624 292929"/>
                </FloatingLabel>
                </Form.Group>

            </Row>

            <Row >
                <Col md={8}>
            <Form.Group  controlId="formGroupEmail">
                <FloatingLabel controlId="floatingInput" label="Correo Electronico">
                    <Form.Control type="email" required placeholder="name@example.com"/>
                </FloatingLabel>
            </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group  className="border text-center " style={{borderRadius:"5px", padding:"15px"}} id="formGridCheckbox" as={Col} >
                    <Form.Check type="checkbox" label="Check out" />
                    
                </Form.Group>
                </Col>
            </Row>
        <br/>
        <button className="btn-outline-light" type="submit" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", maxWidth:"200px", color: "white", margin:"5px", outlineColor:"white" }}>Enviar</button>
        </Form>
        </Card>
    
    </>
    
    )
}

export default CheckoutForm