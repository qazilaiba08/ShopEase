import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    let [time , setTime]= React.useState(0)
    function dayT(){
        setTime(time )
    }

    return (
        <footer className="bg-dark text-light py-4" onClick={dayT}>
            <Container>
                <Row>
                    {/* Column 1 */}
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            We are a modern e-commerce store dedicated to providing the best products with excellent customer service.
                        </p>
                    </Col>
                    
                    {/* Column 2 */}
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Products</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>
                    
                    {/* Column 3 */}
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            Email: support@example.com <br />
                            Phone: +123 456 7890 <br />
                            Address: 123 Main Street, City, Country
                        </p>
                    </Col>
                </Row>
                
                <hr className="border-light" />
                
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
