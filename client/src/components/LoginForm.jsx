import { Form, Button, FormLabel } from "react-bootstrap";

function Login() {
    return (
        <>
        <h2>Please Login</h2>
        <Form>
            <Form.Group>
                <FormLabel>Password</FormLabel>
                <Form.Control
                    type="password"
                    id="inputPassword"
                    // aria+
                />
            </Form.Group>
            <Form.Group>
                <FormLabel>Email Address</FormLabel>
                <Form.Control
                    type="email"
                    id="inputEmail"
                    placeholder="worldsbestdad76@hotmail.com"
                    // aria+
                />
            </Form.Group>
            <Button>Submit</Button>
        </Form>
        </>
    );
}

export default Login;