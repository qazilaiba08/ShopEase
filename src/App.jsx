import './App.css';
import Home from './Pages/Home';
import Post from './Components/Post';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import About from './Pages/About';
import { Navbar, Nav, Button ,NavDropdown } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

const App = () => {
  // State to track the theme
  const [darkMode, setDarkMode] = React.useState(false);

  // Apply theme class to the body when darkMode changes
  React.useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <main>
      <Navbar
        bg={darkMode ? 'dark' : 'light'}
        variant={darkMode ? 'dark' : 'light'}
        expand="lg"
        style={{ backgroundColor: darkMode ? '#121212' : '#1976d2' ,lightingColor:"black"}}
      >
        <Navbar.Brand href="/">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
          <Button
          variant={darkMode ? 'dark' : 'light'}
          onClick={toggleTheme}
          className="d-flex align-items-center"
        >
          {darkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        </Navbar.Collapse>
       
      </Navbar>
      <Home />
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Post />
      <Contact />
      <br />
      <br/>
      </main>

<Footer />
    </Router>
  );
};

export default App;
