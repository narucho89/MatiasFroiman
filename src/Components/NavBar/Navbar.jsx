import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { BiCart } from "react-icons/bi";

function NavBar () {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Narutech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Quienes somos</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">AMD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">INTEL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">NVIDIA</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Monitores</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
             <BiCart style={{color: 'white', fontSize: '50px'}}/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar