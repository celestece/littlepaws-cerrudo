import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, NavDropdown, NavItem } from 'react-bootstrap'
const NavBar = () => {
    
    return (
        <div>
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
                </Nav>
        </div>
    )
}

export default NavBar