import { Button } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

function TestExample() {
    return (
        <>
        <Form>
            <FormGroup className="mb-2" controlId="formBasicEmail***">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                <Form.Text className="text-muted">Idk something about the NSA + Privacy law</Form.Text>
                <Button varient="primary" type="submit">Submit</Button>
            </FormGroup>
        </Form>
        
        </>
    )
}

export default TestExample;