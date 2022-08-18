import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { promProductos } from "../data/data";
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";

import { getDocs, getFirestore, collection, where, query } from "firebase/firestore"
import Loading from "../Loading/Loading";
import { GetProductsFirestore } from "../helpers/Helpers";
import { Card, Col, Form, Row } from "react-bootstrap";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [prodOrder, setProdOrder] = useState('')
    const [prodFilter, setProdFilter] = useState('')

    const {categoriaId} = useParams()


    useEffect(() => {
        GetProductsFirestore(categoriaId, prodFilter, prodOrder)
        .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id,...prod.data()}))))
        .catch(err=> console.log(err))
        .finally(() => setLoading(false))
       
    }, [categoriaId])

    

    return (
        <>
            { greeting }
            <br/><br/>
            {loading ? <Loading/>
            
            : <>
                <Card className="mx-auto" border="warning" style={{ width: '40rem', margin:'20px'}}>
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
                </Card>
                <ItemList productos={productos}/>
            </>
            }
            
            
            <br/><br/>
        </>
    )
    
}

export default ItemListContainer