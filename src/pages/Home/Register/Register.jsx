import React from 'react';import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mx-auto w-25'>
            <h3>Please  Register Here</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  
                    name='name' required 
                    placeholder="Enter Your name" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text"  
                    name='photo' required
                    placeholder="Photo URL Drop Here" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  
                    name='email' required
                    placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms  and Condition  " />
                </Form.Group>
       
                <Button variant="primary" type="submit">
                    Register
                </Button> 
                <br/>
            <Form.Text className="text-secondary"> Already have an Account <Link to='/register'>  Login</Link> 
                        </Form.Text>
            <Form.Text className="text-danger">
                        
                        </Form.Text>
            <Form.Text className="text-success">
                        
                        </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;