import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Card } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import {Link } from "react-router-dom"
import logo from '../assets/logo.png';

const NavBar = () => {
    
   


    return (
        <>

            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <Nav className="justify-content-center capuche"  activeKey="/home">

            <Nav.Item>
                <Nav.Link><Link to="/categoria/balanceado"><h2>BALANCEADO</h2></Link></Nav.Link>
                </Nav.Item> 

                <Nav.Item>
                <Nav.Link><Link  to="/categoria/pate"><h2>PATÉ</h2></Link></Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                <Nav.Link><Link  to="/categoria/complemento"><h2>COMPLEMENTOS</h2></Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link  to="/categoria/juguete"><h2>JUGUETES</h2></Link></Nav.Link>
                </Nav.Item>
                
                <NavItem>
                    <NavLink>
                        <Link to="/cart"><CartWidget/></Link>
                    </NavLink>
                </NavItem>
                
                </Nav>
                
        </>
    )
}

export default NavBar