import React, { useContext, useState } from 'react'; import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleAccepted = event => {
        setAccepted(event.target.checked);

    }

    const handleReg = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <Container className='mx-auto w-25'>
            <h3>Please  Register Here</h3>
            <Form onSubmit={handleReg}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        name='name' required
                        placeholder="Enter Your name" />

                </Form.Group>
                <Form.Group className="mb-3" >
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
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox" name='accept' label={<>Accept <Link to='/terms'> Terms  and Condition</Link> </>} />
                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
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