import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { BiCart } from "react-icons/bi";
import {Link, NavLink} from 'react-router-dom'

function NavBar () {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Narutech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/'>Home</NavLink>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavLink to="/categorias/Procesadores">Procesadores</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to="/categorias/GPU">GPU</NavLink>
                            <NavDropdown.Divider />
                            <NavLink to="/categorias/MONITORES">MONITORES</NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to='/Cart'>
                        <BiCart style={{color: 'white', fontSize: '50px'}}/>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar