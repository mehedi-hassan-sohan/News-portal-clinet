import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Login = () => {  
    const {LoginUser} =useContext(AuthContext)
   const navigate = useNavigate() 
   const location = useLocation()  

   const from = location.state?.from?.pathname || '/category/0'


    const  handleLog =event=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
     
        LoginUser(email,password)
        .then(result=> {
             const LoginUser= result.user
             console.log(LoginUser);
             navigate(from, {replace:true})
         }) 
         .catch(error => {
             console.error(error);
         }) 
        }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please  Login here</h3>
            <Form onSubmit={handleLog}>
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
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
       
                <Button variant="primary" type="submit">
                    Login
                </Button> 
                <br/>
            <Form.Text className="text-secondary"> Don't haven't account Please<Link to='/register'>  Register</Link> 
                        </Form.Text>
            <Form.Text className="text-danger">
                        
                        </Form.Text>
            <Form.Text className="text-success">
                        
                        </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;