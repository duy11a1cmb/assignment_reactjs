import React, {useState} from "react";
import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log(event)
    }
    return (
        <div className='container-login'>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><h3>Email address</h3></Form.Label>
                            <Form.Control required type="email" placeholder="Enter email"/>
                            <Form.Control.Feedback type="invalid">
                                Please enter email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h3>Password</h3></Form.Label>
                            <Form.Control required type="password" placeholder="Password"/>
                            <Form.Control.Feedback type="invalid">
                                Please enter password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className='w-100 d-flex justify-content-center'>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    )
}
export default Login