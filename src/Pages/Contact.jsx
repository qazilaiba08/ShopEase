import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
    let [count,setCount] = React.useState(0)
    function info (){
        setCount(count+1)
    }
    return (
        <Container className="mt-5" style={{ backgroundColor : 'grey', borderRadius: '5px'}}>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1>Contact Us</h1>
                    <p className="mt-4">
                        We dont love to hear from you! Please fill out the form below or reach out to us directly using the information provided.
                    </p>
                </Col>
            </Row>
            
            <Row className="justify-content-center mt-4">
                {/* Contact Form */}
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Write your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={info}>
                            Send Message
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
        
    );
};

export default Contact;
