import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './About.css'

const About = () => {
    const [product, setproduct] = React.useState(null);

    React.useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((product) => setproduct(product));
    }, []); // Fetch product only once, `product` is not needed in the dependency array.

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>About Us</h1>
                    <p className="mt-4">
                        Welcome to our website! We are dedicated to providing high-quality products and services to our customers.
                    </p>
                </Col>
            </Row>
             {/* Card Section */}
             <Row className="justify-content-center mt-5">
                <Col md={6}>
                    {product ? (
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.body}</Card.Text>
                                <button className="btn btn-primary">Learn More</button>
                            </Card.Body>
                        </Card>
                    ) : (
                        <p>Loading product...</p>
                    )}
                </Col>
            </Row>
        </Container>
         
        );
   
      }

   

export default About;
