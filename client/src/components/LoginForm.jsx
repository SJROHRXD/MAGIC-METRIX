import { useState } from 'react';
import { Form, Button, FormLabel, Col, Row, Container } from "react-bootstrap";
// import { render } from 'react-dom';

// function to handle state + submit
// validated, setValidated
// prevent default and stop propagation etc

function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        // checkValidity is a built-in method for forms / prop for forms
        // if the form is invalid, prevent default and stop propagation
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }

        setValidated(true);
    };

    return (
        <>
        <h2>Please, Log In</h2>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-sm-3">
                        <Form.Group as={Col}>
                            <FormLabel>Email Address</FormLabel>
                            <Form.Control
                                type="email"
                                id="inputEmail"
                                placeholder="worldsbestdad76@hotmail.com"
                                // aria+
                            />
                        <Form.Control.Feedback type="invalid">
                            Please, provide a valid email.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FormLabel>Password</FormLabel>
                            <Form.Control
                                type="password"
                                id="inputPassword"
                                // aria+
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    );
}

export default Login;

// render(<Login />);
// only render when testing in isolation