import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "1rem", fontSize: "2.5rem" }} href="#home">Dawid Weltrowski-Knopik</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="#home">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#experience">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
