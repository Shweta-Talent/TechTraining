import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="data:image/png;base64,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">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/CharCounter">CharCounter</Nav.Link>
            <Nav.Link href="/ListProducts">List Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
     
    </>
  );
}

export default ColorSchemesExample;