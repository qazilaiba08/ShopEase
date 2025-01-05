import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Head.css';

function Head() {
  let [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);

  return (
   
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top' style={{ padding: '0.5rem 1rem' }}>
      <Container fluid>
        <Navbar.Brand href="#">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex flex-column flex-lg-row">
        <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 mb-2 mb-lg-0"
        aria-label="Search"
        />
         <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;