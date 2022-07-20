import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Card } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    
    const [sobresShow, setSobresShown] = useState(false);
    const [balanShow, setBalanShown] = useState(false);
  
    // let contenido = "hola"
    // const items = { 1:'a', 2: 'b', 3: 'c', 4:'d' };
    // let idNav
    // let muestraContenido
    

    // const mostrarProductos = event => {
    //     idNav = event.currentTarget.id
    //     muestraContenido = items[idNav]
    //     console.log(muestraContenido)
    //     setIsShown(true)

    //     return idNav
        
    // }

    
    


    return (
        <>
            
            <Nav className="justify-content-center"  activeKey="/home">

            <Nav.Item>
                <Nav.Link onMouseEnter={() => setBalanShown(true)}
                onMouseLeave={() => setBalanShown(false)}>Balanceado</Nav.Link>
                </Nav.Item> 

                <Nav.Item>
                <Nav.Link onMouseEnter={() => setSobresShown(true)}
                onMouseLeave={() => setSobresShown(false)}>Sobrecitos</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link>Complementos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link>Juguetes</Nav.Link>
                </Nav.Item>
                <NavItem>
                    <NavLink>
                        <CartWidget/>
                    </NavLink>
                </NavItem>
                
                </Nav>
                {balanShow && (
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <Nav>
                        <NavItem>
                            <NavLink>Gatos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Perros</NavLink>
                        </NavItem>
                    </Nav>
                </Card>
            )}
            {sobresShow && (
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <Nav>
                        <NavItem>
                            <NavLink>Suffles</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Salsas</NavLink>
                        </NavItem>
                    </Nav>
                </Card>
            )}
        </>
    )
}

export default NavBar