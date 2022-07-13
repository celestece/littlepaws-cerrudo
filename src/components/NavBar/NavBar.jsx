import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, NavDropdown, NavItem, NavLink } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
const NavBar = () => {
    
    return (
        <>
            <Nav className="justify-content-center"  activeKey="/home">
                <NavDropdown title="Balanceado" id="nav-dropdown" >
                    <NavDropdown.Item>Gatos</NavDropdown.Item>
                    <NavDropdown.Item>Perros</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sobrecitos" id="nav-dropdown" >
                    <NavDropdown.Item >Salsas</NavDropdown.Item>
                    <NavDropdown.Item >Suffles</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                <Nav.Link >Complementos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link >Juguetes</Nav.Link>
                </Nav.Item>
                <NavItem>
                    <NavLink>
                        <CartWidget/>
                    </NavLink>
                </NavItem>
                
                </Nav>
        </>
    )
}

export default NavBar