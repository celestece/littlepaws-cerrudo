import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Card } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import {Link } from "react-router-dom"
import logo from '../assets/logo.png';

const NavBar = () => {
    
    const [sobresShow, setSobresShown] = useState(false);
    const [balanShow, setBalanShown] = useState(false);


    return (
        <>
            {/* <style type="text/css">
                {`
            .cartas {
                position: absolute
                
            }
            .cartas-parent {
                display: inline-block
                text-align: center
                width: 50%
                margin-left: 50%
            }
            `}
             </style> */}
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <Nav className="justify-content-center"  activeKey="/home">

            <Nav.Item>
                <Nav.Link onMouseEnter={() => setBalanShown(true)}
                onMouseLeave={() => setBalanShown(false)}><Link to="/categoria/balanceado">Balanceado</Link></Nav.Link>
                </Nav.Item> 

                <Nav.Item>
                <Nav.Link onMouseEnter={() => setSobresShown(true)}
                onMouseLeave={() => setSobresShown(false)}><Link  to="/categoria/sobrecitos">Sobrecitos</Link></Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link><Link  to="/categoria/complementos">Complementos</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link  to="/categoria/juguetes">Juguetes</Link></Nav.Link>
                </Nav.Item>
                <NavItem>
                    <NavLink>
                        <Link to="/cart"><CartWidget/></Link>
                    </NavLink>
                </NavItem>
                
                </Nav>
                {balanShow && (
                <div className='cartas-parent'>
                <Card className="justify-content-center text-center mx-auto cartas" style={{ width: '10rem' }}>
                    <Nav>
                        <NavItem>
                            <NavLink>Gatos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Perros</NavLink>
                        </NavItem>
                    </Nav>
                </Card>
                </div>
            )}
            {sobresShow && (
                <div className='cartas-parent'>
                <Card className="justify-content-center text-center mx-auto cartas" style={{ width: '10rem' }}>
                    <Nav>
                        <NavItem>
                            <NavLink>Suffles</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Salsas</NavLink>
                        </NavItem>
                    </Nav>
                </Card>
                </div>
            )}
        </>
    )
}

export default NavBar