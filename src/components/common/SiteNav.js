import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function SiteNav () {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                <Col>
                    <Image
                        src="/img/IconLogo-500x500.png"
                        fluid
                        width="15%" />
                </Col>
                <Navbar.Brand>The making</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-md-auto'>
                            <Nav.Link href='/login'>Login</Nav.Link> 
                            <Nav.Link href='/*' color='white'>Home</Nav.Link> 
                            <Nav.Link href='/register' color='white'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;